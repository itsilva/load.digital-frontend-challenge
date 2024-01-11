export interface DropdownProps {
  options?: string[];
  label?: string;
  clickedOutside?: boolean;

  onSelectedOption: (event: React.BaseSyntheticEvent) => void;
}
