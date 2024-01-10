import React from "react";
import { ErrorProps } from "./error.props";

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>
        we're really sorry but something went wrong when we tried to get the
        country data, due to:
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
