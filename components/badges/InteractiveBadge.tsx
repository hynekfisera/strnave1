import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

const InteractiveBadge = () => {
  return (
    <span
      className={`inline-block text-xs text-gray-800 bg-gray-200 font-medium px-2 py-0.5 rounded-full align-middle whitespace-nowrap mb-1 ml-1`}
    >
      <FontAwesomeIcon icon={faArrowPointer} /> Interaktivní
    </span>
  );
};

export default InteractiveBadge;
