"use client";

import React, { useState } from "react";
import DontForget from "@/components/interactive/common/DontForget";
import Alert from "@/components/common/Alert";

type Question = string[];

const questions: Question[] = [
  ["náladový", "klidný", "lehkomyslný", "agresivní"],
  ["úzkostlivý", "vyrovnaný", "živý", "nedůtklivý"],
  ["nekompromisní", "zdrženlivý", "zodpovědný", "nestálý"],
  ["střízlivý", "spolehlivý", "otevřený", "roztěkaný"],
  ["pesimistický", "starostlivý", "bezstarostný", "optimistický"],
  ["rezervovaný", "přemýšlivý", "vnímavý", "impulzivní"],
  ["nespolečenský", "pasivní", "společenský", "aktivní"],
  ["tichý", "mírumilovný", "hovorný", "popudivý"],
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
    if (answers.length < 8) {
      setMessage({
        type: "error",
        text: "Některé otázky nebyly vyplněny.",
      });
      return;
    } else {
      const answer0 = answers.filter((answer) => answer === "0").length;
      const answer1 = answers.filter((answer) => answer === "1").length;
      const answer2 = answers.filter((answer) => answer === "2").length;
      const answer3 = answers.filter((answer) => answer === "3").length;
      setMessage({
        type: "success",
        text: `Melancholik: ${answer0}x; flegmatik: ${answer1}x; sangvinik: ${answer2}x; cholerik: ${answer3}x.`,
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
        <div className={`w-full`}>
          {questions.map((question, index) => (
            <div key={index} className={`flex flex-col gap-2 py-4`}>
              <div className={`text-lg font-medium`}>{index + 1}.</div>
              {question.map((answer, i) => (
                <div
                  key={`${index}-${i}`}
                  className={`flex flex-row flex-nowrap items-center gap-3`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    id={`question-${index}-${i}`}
                    value={i}
                  />
                  <label
                    htmlFor={`question-${index}-${i}`}
                    className={`select-none`}
                  >
                    {answer}
                  </label>
                </div>
              ))}
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
