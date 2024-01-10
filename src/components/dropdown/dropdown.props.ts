export interface DropdownProps {
  options?: string[];
  label?: string;

  onSelectedOption: (event: React.BaseSyntheticEvent) => void;
}
