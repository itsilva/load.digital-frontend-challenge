import { Countrie } from "../types/countries.props";

export interface CountriesState {
  countries: Countrie[];
  setCountries: (countries: Countrie[]) => void;
}
