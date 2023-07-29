import React from "react";
import "./Error.scss";

function Error({ message }) {
  return <span className="error">{message}</span>;
}

export default Error;
