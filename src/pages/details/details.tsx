import React, { useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

/** Store */
import { useCountriesStore } from "../../store/countriesStore";

/** Styles */
import {
  BorderCountriesContainer,
  Content,
  ContentLeft,
  ContentRight,
  Field,
  FlagPanel,
  FlexContainer,
  Footer,
  GridContainer,
  Header,
  Image,
  Label,
  NavContainer,
  Title,
  Value,
  Wrapper,
} from "./details.styles";

/** Types */
import { DetailsProps } from "./details.props";
import { Countrie } from "../../types/countries.props";
import DefaultButton from "../../components/buttons/default/default";
import BackButton from "../../components/buttons/back/back";

const ORDERED_RIGHT_FIELDS = [
  { name: "tld", label: "Top Level Domain" },
  { name: "currencies", label: "Currencies" },
  { name: "languages", label: "Languages" },
];

const ORDERED_LEFT_FIELDS = [
  { name: "name.native", label: "Native Name" },
  { name: "population", label: "Population" },
  { name: "region", label: "Region" },
  { name: "subregion", label: "Sub Region" },
  { name: "capital", label: "Capital" },
];

const Details: React.FC<DetailsProps> = () => {
  const { countries } = useCountriesStore();
  const { code } = useParams();

  const { data, isLoading, isError } = useQuery(["details", code], async () => {
    if (!code) return;

    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );

    return response.json();
  });

  const details: Countrie = useMemo(() => data?.[0], [data, code]);

  const formattedCurrencies = useMemo(() => {
    if (!details?.currencies) return;

    return Object.values(details?.currencies)
      ?.map(({ name }) => name)
      ?.join(", ");
  }, [details, code]);

  const formmattedLanguages = useMemo(() => {
    if (!details?.languages) return;

    return Object.values(details?.languages)?.join(", ");
  }, [details, code]);

  const formmattedBorderCountries = useMemo(() => {
    if (!details?.borders) return;

    return (
      details?.borders?.map((border) =>
        countries?.find(
          ({ cca2, cca3 }: { cca2: string; cca3: string }) =>
            cca2?.toLowerCase() === border?.toLowerCase() ||
            cca3?.toLowerCase() === border?.toLowerCase()
        )
      ) ?? undefined
    );
  }, [details, code]);

  const getFieldDataFromDetails = (field: { name: string; label: string }) => {
    if (!details || !field) return;

    if (field?.name?.toLowerCase() === "name.native") {
      const last = Object.keys(details?.name?.nativeName)[
        Object.keys(details?.name?.nativeName).length - 1
      ];

      return details?.name?.nativeName?.[last]?.common;
    }

    if (field?.name?.toLowerCase() === "currencies") {
      return formattedCurrencies;
    }

    if (field?.name?.toLowerCase() === "languages") {
      return formmattedLanguages;
    }

    if (field?.name?.toLowerCase() === "population") {
      return details?.["population"]?.toLocaleString("en-US");
    }

    return details?.[field.name];
  };

  const renderCounrieField = ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => (
    <Field key={`field--${field?.toLowerCase().replace(" ", "-")}`}>
      <Label>{field}</Label>
      <Value>{value}</Value>
    </Field>
  );

  return (
    <Wrapper>
      <NavContainer>
        <BackButton link="/" label="Back" />
      </NavContainer>
      <GridContainer>
        <FlagPanel>
          <Image src={details?.flags?.png} alt={details?.flags?.alt} />
        </FlagPanel>
        <FlexContainer>
          <Header>
            <Title>{details?.name?.common}</Title>
          </Header>
          <Content>
            <ContentLeft>
              {ORDERED_LEFT_FIELDS?.map((field) =>
                renderCounrieField({
                  field: field?.label,
                  value: getFieldDataFromDetails(field),
                })
              )}
            </ContentLeft>
            <ContentRight>
              {ORDERED_RIGHT_FIELDS?.map((field) =>
                renderCounrieField({
                  field: field?.label,
                  value: getFieldDataFromDetails(field),
                })
              )}
            </ContentRight>
          </Content>
          <Footer>
            {details?.borders && (
              <>
                <Label>Border Countries: </Label>
                <BorderCountriesContainer>
                  {formmattedBorderCountries?.map((border) => {
                    return (
                      <DefaultButton
                        link={`/countries/details/${border?.cca3}`}
                        label={border?.name?.common}
                      />
                    );
                  })}
                </BorderCountriesContainer>
              </>
            )}
          </Footer>
        </FlexContainer>
      </GridContainer>
    </Wrapper>
  );
};

export default Details;
