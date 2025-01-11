"use client";

import React, { useState } from "react";
import DontForget from "@/components/interactive/common/DontForget";
import Alert from "@/components/common/Alert";

const questions: string[] = [
  "Musím často vyhledávat lidi, kteří by mi rozmluvili mé „černé myšlenky“.",
  "Musím přiznat, že moje nálada je velmi proměnlivá. Někdy se cítím dost rozrušený, aniž by se stalo něco, co tento pocit vyvolalo.",
  "Mám sklon být příliš citlivý na kritiku nebo nevlídné poznámky.",
  "Dost často trpím pocitem viny bez skutečného důvodu.",
  "Často se cítím velmi napjatý a vzrušený.",
  "Čas od času se stávám rozčileným, nejistým a utrápeným.",
  "Dosti snadno se stávám podrážděným a špatně naloženým.",
  "Jsem ustaraný a mám sklon vidět černé stránky věcí.",
  "Mám sklon probírat minulé problémy a myslet na to, co se stane.",
  "Stávám se velmi nervózním, když se něco nedaří.",
  "Mám sklon se příliš podceňovat a srovnávat se s druhými lidmi ve svůj neprospěch.",
  "Nespím příliš dobře a asi se cítím unavenější než druzí.",
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
    <section className={`flex flex-col gap-6`}>
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
              <label htmlFor={`question-${index}`} className={`select-none`}>
                {question}
              </label>
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
        <Alert type={message.type} className={`flex flex-col gap-2`}>
          {message.result && (
            <strong
              className={`font-semibold text-lg ${message.type === "success" ? "text-green-700" : "text-red-700"}`}
            >
              Vyhodnocení
            </strong>
          )}
          <span>{message.text}</span>
          {message.result && (
            <>
              <ul className={`!my-0`}>
                <li
                  className={`${message.result >= 0 && message.result <= 4 ? "font-bold" : ""}`}
                >
                  0-5 – v normě
                </li>
                <li
                  className={`${message.result >= 5 && message.result <= 10 ? "font-bold" : ""}`}
                >
                  6-12 – vaše citlivost je zvýšena
                </li>
              </ul>
              <p className={`my-0`}>
                Výše skóre vám ukazuje vaši tendenci ke zranitelnosti,
                přecitlivělosti, k braní věcí na příliš těžkou váhu a příliš k
                srdci.
              </p>
            </>
          )}
        </Alert>
      )}
    </section>
  );
};

export default Test;
