export interface Countrie {
  name: CountrieName;
  population: number | string;
  currencies: object;
  region: string;
  capital: string;
  flags: CountrieFlags;
  cca2: string;
  cca3: string;
  ccn3: string;
  subregion: string;
  languages: object;
  borders: string[];
}

export interface CountrieName {
  common: string;
  official: string;
  nativeName: any;
}

export interface CountrieFlags {
  alt: string;
  png: string;
  svg: string;
}
