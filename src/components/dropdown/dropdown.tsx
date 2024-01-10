import React, { useState } from "react";
import { Label, Option, Options, Wrapper } from "./dropdown.styles";
import { DropdownProps } from "./dropdown.props";

import { FaCaretDown } from "react-icons/fa";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  onSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (event: React.BaseSyntheticEvent) => {
    event?.preventDefault();

    onSelectedOption?.(event);
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Label onClick={() => setIsOpen(!isOpen)}>
        {label ?? "Filter by Region"}
        <span>
          <FaCaretDown />
        </span>
      </Label>
      <Options isOpen={isOpen}>
        {options?.map((option) => (
          <Option
            key={`dropdown-option-${String(option)?.toLowerCase()}`}
            value={option}
            onClick={handleOptionClick}
          >
            {option}
          </Option>
        ))}
      </Options>
    </Wrapper>
  );
};

export default Dropdown;
