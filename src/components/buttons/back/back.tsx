import React from "react";

/** Icons */
import { FaArrowLeft } from "react-icons/fa";

/** Styles */
import { LinkAsButton } from "./back.styles";

/** Types */
import { DefaultButtonProps } from "./back.props";

const BackButton: React.FC<DefaultButtonProps> = ({ link, label }) => {
  if (!link || !label) return null;

  return (
    <LinkAsButton to={link}>
      <span>
        <FaArrowLeft />{" "}
      </span>
      {label}
    </LinkAsButton>
  );
};

export default BackButton;
