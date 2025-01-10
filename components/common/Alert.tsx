import React, { PropsWithChildren } from "react";

type Props = {
  type: "info" | "success" | "warning" | "error";
  className?: string;
};

const Alert = ({ type, className, children }: PropsWithChildren<Props>) => {
  let colorVariant = "";

  switch (type) {
    case "info":
      colorVariant = "bg-blue-50 text-blue-700 border-blue-200";
      break;
    case "success":
      colorVariant = "bg-green-50 text-green-700 border-green-200";
      break;
    case "warning":
      colorVariant = "bg-yellow-50 text-yellow-700 border-yellow-200";
      break;
    case "error":
      colorVariant = "bg-red-50 text-red-700 border-red-200";
      break;
    default:
      colorVariant = "bg-gray-50 text-gray-700 border-gray-200";
      break;
  }

  return (
    <div
      className={`my-0 font-medium border px-4 sm:px-6 py-4 rounded-md ${colorVariant} ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Alert;
