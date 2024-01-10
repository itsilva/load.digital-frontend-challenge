import React from "react";
import { LoadingProps } from "./loading.props";

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <p>please wait a moment, we are collecting the data</p>
    </div>
  );
};

export default Loading;
