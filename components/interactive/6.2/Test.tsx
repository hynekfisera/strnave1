"use client";

import React, { useState } from "react";
import DontForget from "@/components/interactive/common/DontForget";

const questions: string[] = [
  "Máte strach z toho, že vás někdo bude žádat o laskavost?",
  "Mlčíte, když vás někdo nespravedlivě kritizuje?",
  "Přinesou-li vám v restauraci vlažné jídlo, sníte je?",
  "Jsou pro vás potřeby druhých důležitější než vlastní?",
  "Je pro vás obtížné zbavit se člověka, který obchází byty a něco prodává?",
  "Ublíží-li vám přítel, obvykle mu o tom ani neřeknete?",
  "Koupíte si láhev vína a zjistíte, že je zkyslá. Vyhodíte prostě láhev a pustíte to z hlavy?",
  "Dozvíte se, že vás lidé pomlouvají. Budete mlčet a doufat, že přestanou?",
  "Jestliže místo, které máte v letadle rezervované, je už obsazeno, začnete se rozhlížet po jiném?",
  "Používáte „milosrdné“ lži, abyste neranili city svých přátel?",
  "Vídáte se dosud se známými, kteří vás už léta nudí?",
  "Zastavili jste taxík, ale jiný člověk vás předešel a nastoupil – začnete hledat nový?",
  "Určují vaši přátelé váš společenský život?",
  "Souhlasíte někdy s milováním se svým partnerem, i když nemáte náladu?",
];

type Message = {
  type: "success" | "error";
  text: string;
  result: number | null;
};

const Test = () => {
  const [message, setMessage] = useState<Message | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const answers = Object.values(data);
    const atLeastOneNotChosen = answers.some((answer) => answer === "0");
    if (atLeastOneNotChosen) {
      setMessage({
        type: "error",
        text: "Některé otázky nebyly vyplněny.",
        result: null,
      });
      return;
    } else {
      const countYesAnswers = answers.filter((answer) => answer === "1").length;
      setMessage({
        type: "success",
        text: `Odpověď "ano" byla zvolena ${countYesAnswers}x.`,
        result: countYesAnswers,
      });
    }
  };

  return (
    <section className={`flex flex-col gap-10`}>
      <DontForget />
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 items-center`}
      >
        <div className={`divide-y`}>
          {questions.map((question, index) => (
            <div
              key={index}
              className={`py-4 flex flex-row gap-2 items-center justify-between`}
            >
              <label htmlFor={`question-${index}`}>{question}</label>
              <select
                name={`question-${index}`}
                id={`question-${index}`}
                className={`ml-auto`}
              >
                <option value="0">---</option>
                <option value="1">Ano</option>
                <option value="2">Ne</option>
              </select>
            </div>
          ))}
        </div>
        <button className={`btn btn-primary`}>Vyhodnotit</button>
      </form>
      {message && (
        <div
          className={`flex flex-col gap-2 px-4 sm:px-6 py-4 rounded-md border-2 ${message.type === "success" ? "text-green-700 bg-green-50 border-green-200" : "text-red-700 bg-red-50 border-red-200"}`}
        >
          <strong
            className={`font-semibold ${message.type === "success" ? "text-green-700" : "text-red-700"}`}
          >
            Vyhodnocení
          </strong>
          <span>{message.text}</span>
          {message.result && (
            <>
              <ul className={`!my-0`}>
                <li
                  className={`${message.result >= 0 && message.result <= 4 ? "font-semibold" : ""}`}
                >
                  0-4 – máte sklony k agresivitě
                </li>
                <li
                  className={`${message.result >= 5 && message.result <= 10 ? "font-semibold" : ""}`}
                >
                  5-10 – jste asertivní
                </li>
                <li
                  className={`${message.result >= 11 && message.result <= 14 ? "font-semibold" : ""}`}
                >
                  11-14 – jste submisivní (podřídivý)
                </li>
              </ul>
              <p className={`my-0`}>
                I tak nezapomeňte, že je plně ve vašich silách překonat
                nedostatek sebedůvěry a vzít otěže svého života do vlastních
                rukou.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Test;
