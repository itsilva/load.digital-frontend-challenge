import React, { useState } from "react";

/** Icons */
import { FaCaretDown } from "react-icons/fa";

/** Hooks */
import { useOutsideClick } from "../../hooks/useOutsideClick";

/** Styles */
import { Label, Option, Options, Wrapper } from "./dropdown.styles";

/** Types */
import { DropdownProps } from "./dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  onSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = () => {
    isOpen ? setIsOpen(false) : setIsOpen(isOpen);
  };

  const handleOptionClick = (event: React.BaseSyntheticEvent) => {
    event?.preventDefault();

    onSelectedOption?.(event);
    setIsOpen(!isOpen);
  };

  const wrapperRef = useOutsideClick(handleClickOutside);

  return (
    <Wrapper ref={wrapperRef}>
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
