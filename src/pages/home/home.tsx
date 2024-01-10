import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";

/** Store */
import { useCountriesStore } from "../../store/countriesStore";

/** Components */
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";
import Card from "../../components/card/card";
import Dropdown from "../../components/dropdown/dropdown";
import Input from "../../components/input/input";

/** Styles */
import {
  CountriesListContainer,
  CountriesListControls,
  Wrapper,
} from "./home.styles";

/** Types */
import { HomeProps } from "./home.props";
import { Countrie, CountrieName } from "../../types/countries.props";

const HomePage: React.FC<HomeProps> = () => {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const { countries, setCountries } = useCountriesStore();

  const { data, isLoading, isError } = useQuery("countries", async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  });

  const sanitizedCountriesRegions: string[] | any = useMemo(() => {
    if (!data) return;

    return (
      [...new Set(data?.map(({ region }: { region: string }) => region))] ?? []
    );
  }, [data]);

  const filteredCountries = useMemo(
    () =>
      filter &&
      countries?.filter(
        ({ region, name }: { region: string; name: CountrieName }) =>
          region?.toLocaleLowerCase() === filter?.toLocaleLowerCase() ||
          name?.common?.toLowerCase()?.includes(filter) ||
          name?.official?.toLowerCase()?.includes(filter)
      ),
    [filter]
  );

  const onInputSearch = useCallback((event: React.BaseSyntheticEvent) => {
    const term = String(event?.target?.value)?.toLowerCase();

    if (term) setFilter(term);
  }, []);

  const onSelecteOption = useCallback((event: React.BaseSyntheticEvent) => {
    const selectedFilter = event?.target?.innerText;

    if (selectedFilter) setFilter(selectedFilter);
  }, []);

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data, setCountries, filter]);

  if (isError) {
    return <Error message={data?.message ?? ""} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const countriesList = filteredCountries ?? countries;

  return (
    <Wrapper>
      <CountriesListControls>
        <Input
          placeholder="Search for a country..."
          onChange={onInputSearch}
          isSearch
        />
        <Dropdown
          options={sanitizedCountriesRegions}
          onSelectedOption={onSelecteOption}
        />
      </CountriesListControls>
      <CountriesListContainer>
        {countriesList?.map((countrie: Countrie) => (
          <Card
            key={`countrie-${countrie?.cca2}-${countrie?.ccn3}`}
            details={countrie}
          />
        ))}
      </CountriesListContainer>
    </Wrapper>
  );
};

export default HomePage;
