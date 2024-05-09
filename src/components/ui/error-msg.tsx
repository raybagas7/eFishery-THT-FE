import React from "react";
import style from "./error-msg.module.scss";
import { IErrorMessage } from "@/interfaces/components";

const ErrorMessage = ({ message }: IErrorMessage) => {
  return <span className={style.error_msg}>{message}</span>;
};

export default ErrorMessage;
