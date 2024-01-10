import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/** Types */
import { Countrie } from "../types/countries.props";
import { CountriesState } from "./countriesStores.props";

export const useCountriesStore = create<CountriesState>()(
  persist(
    (set) => ({
      countries: [],
      setCountries: (countries: Countrie[]) => set(() => ({ countries })),
    }),
    {
      name: "countries-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
