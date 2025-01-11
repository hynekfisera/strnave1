"use client";

import React, { useState } from "react";
import DontForget from "@/components/interactive/common/DontForget";
import { ResultSection } from "@/components/interactive/psy2/belbinuv-test/types/Section";
import { sections } from "@/components/interactive/psy2/belbinuv-test/resources/sections";
import {
  getPersonPoints,
  sumSectionPoints,
} from "@/components/interactive/psy2/belbinuv-test/utils/results.functions";
import Alert from "@/components/common/Alert";
import { people } from "@/components/interactive/psy2/belbinuv-test/resources/people";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Test = () => {
  const [results, setResults] = useState<ResultSection[]>(
    sections.map((s) => ({
      ...s,
      statements: s.statements.map((st) => ({ ...st, points: 0 })),
    })),
  );

  return (
    <section className={`flex flex-col gap-6`}>
      <DontForget />
      <div className={`flex flex-col gap-10 sm:gap-14`}>
        {results.map((section, sectionIndex) => {
          const points = sumSectionPoints(section);
          const tooManyPoints = points > 10;
          const notEnoughPoints = points < 10;
          return (
            <div key={sectionIndex} className={`flex flex-col gap-2 sm:gap-6`}>
              <div
                className={`flex flex-row flex-nowrap justify-between items-center gap-3`}
              >
                <div className={`sm:text-xl font-semibold`}>{section.text}</div>
                <Alert
                  type={
                    notEnoughPoints
                      ? "warning"
                      : tooManyPoints
                        ? "error"
                        : "success"
                  }
                  className={`text-sm sm:text-base font-medium !px-2 !py-1`}
                >
                  Rozděleno: <span className={`font-bold`}>{points}/10</span>
                </Alert>
              </div>
              <div className={`flex flex-col divide-y`}>
                {section.statements.map((statement, statementIndex) => (
                  <div
                    key={statementIndex}
                    className={`flex flex-row flex-nowrap gap-2 justify-between items-center py-3 sm:py-4`}
                  >
                    <label
                      htmlFor={`statement-${sectionIndex}-${statementIndex}`}
                    >
                      {statement.text}
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={10}
                      id={`statement-${sectionIndex}-${statementIndex}`}
                      value={statement.points}
                      onChange={(e) => {
                        setResults((prev) =>
                          prev.map((s, i) => {
                            if (i === sectionIndex) {
                              return {
                                ...s,
                                statements: s.statements.map((st, j) => {
                                  if (j === statementIndex) {
                                    return {
                                      ...st,
                                      points: +e.target.value,
                                    };
                                  }
                                  return st;
                                }),
                              };
                            }
                            return s;
                          }),
                        );
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={`flex flex-col gap-6`}>
        <div className={`flex flex-col gap-2`}>
          <h2>Vyhodnocení</h2>
          {results.some((section) => sumSectionPoints(section) !== 10) && (
            <Alert type="error">
              <FontAwesomeIcon icon={faXmark} /> Alespoň jedna sekce nemá
              správně rozdělené body. Doplňte body tak, aby byl součet bodů v
              každé sekci 10.
            </Alert>
          )}
          {results.every((section) => sumSectionPoints(section) === 10) && (
            <>
              <Alert type="success">
                <FontAwesomeIcon icon={faCheck} /> Výsledky byly úspěšně
                vyhodnoceny. Níže je seznam týmových rolí seřazený podle počtu
                bodů. Nejvyšší skóre ukazuje, jak se dokážeme prosadit v týmu.
                Druhé nejvyšší skóre vyjadřuje záložní roli. Dvě nejnižší skóre
                znamenají vaše slabiny.
              </Alert>
              <DontForget />
            </>
          )}
        </div>
        <div
          className={`flex flex-col gap-10 ${results.some((section) => sumSectionPoints(section) !== 10) ? "opacity-40" : ""}`}
        >
          {people
            .sort(
              (a, b) =>
                getPersonPoints(b.id, results) - getPersonPoints(a.id, results),
            )
            .map((person) => (
              <div key={person.id} className={`flex flex-col gap-2`}>
                <div className={`text-sm font-medium text-gray-500`}>
                  Počet bodů: {getPersonPoints(person.id, results)}
                </div>
                <div className={`text-xl font-semibold text-gray-900`}>
                  {person.name}
                </div>
                <div className={`text-gray-600`}>{person.description}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Test;
