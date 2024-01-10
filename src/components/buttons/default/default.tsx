import React from "react";
import { DefaultButtonProps } from "./default.props";
import { LinkAsButton } from "./default.styles";

const DefaultButton: React.FC<DefaultButtonProps> = ({ link, label }) => {
  if (!link || !label) return null;

  return <LinkAsButton to={link}>{label}</LinkAsButton>;
};

export default DefaultButton;
