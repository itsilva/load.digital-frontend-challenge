import React from "react";
import { DefaultInput, Wrapper } from "./input.styles";
import { DefaultInputProps } from "./input.props";

import { FaSearch } from "react-icons/fa";

const Input: React.FC<DefaultInputProps> = ({
  placeholder,
  onChange,
  isSearch,
}) => {
  const handleInputChage = (event: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    onChange?.(event);
  };
  return (
    <Wrapper>
      {isSearch && <FaSearch />}
      <DefaultInput
        type="text"
        placeholder={placeholder ?? "Start typing..."}
        onChange={handleInputChage}
      />
    </Wrapper>
  );
};

export default Input;
