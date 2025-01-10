import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Alert from "@/components/common/Alert";

const DontForget = () => {
  return (
    <Alert type={`warning`}>
      <FontAwesomeIcon icon={faExclamationTriangle} /> Nezapomeňte si
      vyhodnocení testu zapsat, abyste ho poté mohli zkonzultovat na cvičení.
      Při obnovení stránky se výsledek ztratí.
    </Alert>
  );
};

export default DontForget;
