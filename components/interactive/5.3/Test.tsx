"use client";

import React, { useState } from "react";
import DontForget from "@/components/interactive/common/DontForget";
import Alert from "@/components/common/Alert";

type Question = {
  left: string;
  right: string;
};

const questions: Question[] = [
  {
    left: "Nové věci plánuji vždy do detailu.",
    right: "Nové věci dělám bez rozmyslu.",
  },
  {
    left: "Uvažuji logicky a málokdy dělám ukvapené závěry.",
    right: "Dělám závěry bez toho, abych se zabýval detaily.",
  },
  {
    left: "Nesním s otevřenýma očima a málokdy si pamatuji své noční sny.",
    right: "Mám velmi živé sny a často sním s otevřenýma očima.",
  },
  {
    left: "Snažím se pochopit příčiny chování jiných lidí.",
    right: "Motivy chování jiných lidí mi často nejsou jasné.",
  },
  {
    left: "Mám raději matematiku a přírodovědné předměty než předměty humanitní.",
    right:
      "Mám raději humanitní předměty než matematiku a přírodovědné předměty.",
  },
  {
    left: "Jsem dochvilný a mám dobrý smysl pro čas.",
    right: "Nejsem zrovna dochvilný a nemám dobrý smysl pro čas.",
  },
  {
    left: "Své pocity umím dobře popsat slovy",
    right: "Své pocity těžko vyjadřuji slovy.",
  },
  {
    left: "Když se rozhoduji, spoléhám se na fakta.",
    right: "Když se rozhoduji, spoléhám se na své pocity.",
  },
  {
    left: "Své poznámky a materiály mám v perfektním pořádku.",
    right: "Nedělám si žádné kartotéky",
  },
  {
    left: "Když mluvím, mám ruce v klidu.",
    right: "Když mluvím, hodně gestikuluji.",
  },
  {
    left: "Nemívám předtuchy a nespoléhám se na svou intuici.",
    right: "Spoléhám se na svůj instinkt a dám na předtuchy.",
  },
  {
    left: "Málokdy myslím v obrazech.",
    right: "Mé dojmy a myšlenky se často objevují v obrazech.",
  },
  {
    left: "Umím dobře vysvětlovat.",
    right: "Rozumím tomu, co kdo říká, ale neumím to vysvětlit.",
  },
  {
    left: "Problémy řeším tak, že na nich pracuji a snažím se hledat různé přístupy tak dlouho, dokud nenajdu řešení.",
    right:
      "Problémy řeším tak, že je na čas odložím a čekám, až se na obzoru objeví nějaké řešení.",
  },
  {
    left: "Umím řešit hádanky a slovní hříčky.",
    right: "Hádanky a slovní hříčky mě nebaví.",
  },
  {
    left: "Umím dobře ovládat své pocity.",
    right: "Své pocity dávám najevo.",
  },
  {
    left: "Mám raději literaturu faktu než romantické příběhy.",
    right: "Mám raději romantické romány než literaturu faktu.",
  },
  {
    left: "Problém se snažím analyzovat.",
    right: "Na problém se dívám jako na celek.",
  },
  {
    left: "Hudbě nerozumím.",
    right: "Mám velmi rád hudbu.",
  },
];

type Message = {
  type: "success" | "error";
  text: string;
};

const Test = () => {
  const [message, setMessage] = useState<Message | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const answers = Object.values(data);
    if (answers.length < 19) {
      setMessage({
        type: "error",
        text: "Některé otázky nebyly vyplněny.",
      });
      return;
    } else {
      const left = answers.filter((answer) => answer === "left").length;
      const right = answers.filter((answer) => answer === "right").length;
      setMessage({
        type: "success",
        text: `Levá hemisféra: ${left}x; pravá hemisféra ${right}x. Pokud jsou výsledky přibližně stejné, nemá převahu ani jedna vaše hemisféra.`,
      });
    }
  };

  return (
    <section className={`flex flex-col gap-2 sm:gap-6`}>
      <DontForget />
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 items-center`}
      >
        <div className={`divide-y`}>
          {questions.map((question, index) => (
            <div
              key={index}
              className={`py-8 sm:py-4 grid sm:grid-cols-2 gap-2 sm:gap-6`}
            >
              <div
                className={`flex flex-row justify-between items-center gap-4 flex-nowrap`}
              >
                <label
                  htmlFor={`question-${index}-left`}
                  className={`w-full select-none sm:text-right`}
                >
                  {question.left}
                </label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`question-${index}-left`}
                  value={`left`}
                />
              </div>
              <div
                className={`flex flex-row justify-between items-center gap-4 flex-nowrap sm:flex-row-reverse`}
              >
                <label
                  htmlFor={`question-${index}-right`}
                  className={`w-full select-none`}
                >
                  {question.right}
                </label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`question-${index}-right`}
                  value={`right`}
                />
              </div>
            </div>
          ))}
        </div>
        <button className={`btn btn-primary`}>Vyhodnotit</button>
      </form>
      {message && (
        <Alert type={message.type} className={`flex flex-col gap-2`}>
          {message.type === "success" && (
            <strong
              className={`font-semibold text-lg ${message.type === "success" ? "text-green-700" : "text-red-700"}`}
            >
              Vyhodnocení
            </strong>
          )}
          <span>{message.text}</span>
        </Alert>
      )}
    </section>
  );
};

export default Test;
