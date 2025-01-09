import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const DontForget = () => {
  return (
    <div
      className={`font-medium border px-4 sm:px-6 py-4 text-yellow-700 bg-yellow-50 border-yellow-200`}
    >
      <FontAwesomeIcon icon={faExclamationTriangle} /> Nezapomeňte si
      vyhodnocení testu zapsat, abyste ho poté mohli zkonzultovat na cvičení.
      Při obnovení stránky se výsledek ztratí.
    </div>
  );
};

export default DontForget;
