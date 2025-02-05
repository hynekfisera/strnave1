"use client";

import React, { useState } from "react";
import DontForget from "@/components/interactive/common/DontForget";
import Alert from "@/components/common/Alert";

type Question = {
  text: string;
  value: "A" | "B" | "C" | "D" | "E";
};

type Section = {
  name: string;
  questions: Question[];
};

const sections: Section[] = [
  {
    name: "I. Váš životní styl",
    questions: [
      {
        text: "Podařilo se vám něco mimořádného a získali jste za to uznání.",
        value: "D",
      },
      {
        text: "Změnili jste svůj denní režim (např. dojíždění do práce).",
        value: "E",
      },
      {
        text: "Změnili jste počet nebo druh vašich společenských aktivit.",
        value: "E",
      },
      {
        text: "Změnili jste způsob, jak trávíte svůj volný čas (např. jste se začali věnovat novému sportu).",
        value: "E",
      },
      {
        text: "Kouřili jste 20 cigaret denně a přestali jste kouřit.",
        value: "B",
      },
      {
        text: "Byli jste závislí na tvrdé droze nebo na alkoholu a přestali jste s tím.",
        value: "A",
      },
      {
        text: "Byli jste na dovolené nebo na prázdninách.",
        value: "E",
      },
      {
        text: "Je po Vánocích.",
        value: "E",
      },
      {
        text: "Přestěhovali jste se.",
        value: "C",
      },
      {
        text: "Žijete v hlučném a stresovém místě.",
        value: "B",
      },
      {
        text: "Někdo vám velmi ublížil.",
        value: "A",
      },
      {
        text: "Byli jste nemocní (netýká se lehčích nemocí).",
        value: "A",
      },
      {
        text: "Byli jste účastníky nějaké těžké autonehody nebo jste utrpěli velký šok (požár atd.).",
        value: "B",
      },
      {
        text: "Platili jste pokutu za špatné parkování nebo jste se dopustili jiného přestupku.",
        value: "E",
      },
    ],
  },
  {
    name: "II. Vaše rodina a blízcí přátelé",
    questions: [
      {
        text: "Oženili jste se nebo vdali.",
        value: "A",
      },
      {
        text: "Museli jste se rozejít s vaším partnerem, i když jste nechtěli.",
        value: "C",
      },
      {
        text: "Měli jste problémy se svými příbuznými z manželčiny strany/manželovy strany.",
        value: "D",
      },
      {
        text: "Častěji se hádáte se svým partnerem.",
        value: "C",
      },
      {
        text: "Byli jste nevěrní svému partnerovi.",
        value: "C",
      },
      {
        text: "Zjistili jste, že vám váš partner byl nevěrný.",
        value: "C",
      },
      {
        text: "Měli jste nebo máte sexuální problémy.",
        value: "B",
      },
      {
        text: "Usmířili jste se se svým partnerem.",
        value: "B",
      },
      {
        text: "Došlo ke změnám ve vaší rodině nebo ve vaší domácnosti.",
        value: "E",
      },
      {
        text: "Očekáváte přírůstek do rodiny (nezáleží na tom jestli jste to plánovali či nikoli).",
        value: "B",
      },
      {
        text: "Narodilo se vám dítě.",
        value: "C",
      },
      {
        text: "Jedno z vašich dětí začalo chodit do školy nebo se oženilo či vdalo.",
        value: "D",
      },
      {
        text: "Vaše rodina získala sňatkem nového člena.",
        value: "C",
      },
      {
        text: "Člen vaší rodiny je alkoholik, narkoman nebo trpí něčím podobným.",
        value: "A",
      },
      {
        text: "Někdo z vaší rodiny měl nehodu nebo onemocněl.",
        value: "B",
      },
      {
        text: "Někdo z vaší rodiny se zotavil z nehody nebo nemoci.",
        value: "B",
      },
      {
        text: "Někdo ve vaší rodině zemřel.",
        value: "A",
      },
      {
        text: "Zemřel vám blízký přítel.",
        value: "B",
      },
    ],
  },
  {
    name: "III. Vaše zaměstnání a finance",
    questions: [
      {
        text: "Poprvé jste začali chodit do práce nebo jste se do práce vrátili po dlouhé době.",
        value: "D",
      },
      {
        text: "Máte velmi zodpovědné nebo velmi vyčerpávající zaměstnání.",
        value: "B",
      },
      {
        text: "Jste neustále přepracovaní.",
        value: "B",
      },
      {
        text: "V práci trpíte nějakou úzkostí (např. krachuje váš podnik, zaměstnanci stávkují apod.).",
        value: "B",
      },
      {
        text: "Změnili jste nebo měníte své zaměstnání.",
        value: "C",
      },
      {
        text: "Došlo ke změnám ve vašem zaměstnání nebo na vašem pracovišti (např. nové funkce, nový nadřízený apod.).",
        value: "C",
      },
      {
        text: "Byli jste povýšeni nebo obdarováni.",
        value: "D",
      },
      {
        text: "Měli jste problémy se svým šéfem nebo s jinými nadřízenými.",
        value: "E",
      },
      {
        text: "Šli jste do důchodu (nezáleží na tom, jestli jste to plánovali či nikoli).",
        value: "B",
      },
      {
        text: "Byli jste propuštěni.",
        value: "B",
      },
      {
        text: "Došlo k velké změně ve vaší finanční situaci (k lepšímu nebo horšímu).",
        value: "C",
      },
      {
        text: "Dlužíte víc, než je váš roční plat (např. na hypotéce).",
        value: "D",
      },
      {
        text: "Zažádali jste o velkou hypotéku nebo půjčku.",
        value: "E",
      },
    ],
  },
];

const questionIdsAndValues = sections.flatMap((section, index) =>
  section.questions.map((question, indexQ) => [
    `question-${index}-${indexQ}`,
    question.value,
  ]),
);

type Message = {
  text: string;
  result: number;
};

const Test = () => {
  const [message, setMessage] = useState<Message | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let count = 0;

    for (const key in data) {
      const question = questionIdsAndValues.find((q) => q[0] === key);

      if (!question) {
        continue;
      }

      switch (question[1]) {
        case "A":
          count += 50;
          break;
        case "B":
          count += 40;
          break;
        case "C":
          count += 30;
          break;
        case "D":
          count += 20;
          break;
        case "E":
          count += 10;
          break;
      }
    }

    setMessage({
      text: `Součet bodů ze všech oddílů testu: ${count}`,
      result: count,
    });
  };

  return (
    <section className={`flex flex-col gap-6`}>
      <DontForget />
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-8 items-center`}
      >
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col gap-4 w-full`}>
            <div className={`text-lg font-medium`}>{section.name}</div>
            <div className={`divide-y`}>
              {section.questions.map((question, indexQ) => (
                <div
                  key={`question-${index}-${indexQ}`}
                  className={`py-4 flex flex-row gap-2 items-center justify-between`}
                >
                  <label
                    htmlFor={`question-${index}-${indexQ}`}
                    className={`select-none`}
                  >
                    {question.text}
                  </label>
                  <input
                    type="checkbox"
                    name={`question-${index}-${indexQ}`}
                    id={`question-${index}-${indexQ}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className={`btn btn-primary`}>Vyhodnotit</button>
      </form>
      {message && (
        <Alert type={`success`} className={`flex flex-col gap-2`}>
          <strong className={`font-semibold text-lg text-green-700`}>
            Vyhodnocení
          </strong>
          <span>{message.text}</span>
          <>
            <ul className={`!my-0`}>
              <li
                className={`${message.result >= 0 && message.result <= 50 ? "font-bold" : ""}`}
              >
                Pokud máte 0-50 bodů, nejste vystavováni příliš mnoha stresovým
                situacím; nemoc ani nějaká nehoda nejsou pravděpodobné.
              </li>
              <li
                className={`${message.result >= 51 && message.result <= 100 ? "font-bold" : ""}`}
              >
                Pokud máte 51-100 bodů, pravděpodobnost, že onemocníte nebo že
                se vám stane nějaká nehoda, vzrostla o 35%.
              </li>
              <li
                className={`${message.result >= 101 && message.result <= 150 ? "font-bold" : ""}`}
              >
                Pokud máte 101-150 bodů, pravděpodobnost, že onemocníte nebo že
                se vám stane nějaká nehoda, vzrostla o 50%. Zkuste omezit
                stresové situace alespoň v těch oblastech svého života, které
                máte pod kontrolou.
              </li>
              <li className={`${message.result > 150 ? "font-bold" : ""}`}>
                Pokud máte více než 150 bodů, pravděpodobnost, že onemocníte
                nebo že se vám stane nějaká nehoda, vzrostla o 60%. Měli byste
                být maximálně opatrní a snažit se vést klidný život bez stresu
                alespoň tak dlouho, než dosáhnete lepšího výsledku.
              </li>
            </ul>
          </>
        </Alert>
      )}
    </section>
  );
};

export default Test;
