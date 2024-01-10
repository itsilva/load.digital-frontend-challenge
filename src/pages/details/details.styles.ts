import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: var(--default-header-height);
  left: var(---default-left-position);

  width: 100%;
  height: calc(100% - var(--default-header-height));

  background-color: var(--bg-very-light-grey);
`;

export const GridContainer = styled.div`
  max-width: 100%;

  padding: 2rem;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  background-color: var(--bg-very-light-grey);

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 6rem;
  }
`;

export const NavContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
`;

export const FlexContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  margin: auto 0;
`;

export const FlagPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.h1``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: unset;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p,
  b {
    margin: 0.2rem 0;
  }

  @media only screen and (max-width: 600px) {
    & p,
    b {
      margin: 0.8rem 0;
    }
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p,
  b {
    margin: 0.2rem 0;
  }

  @media only screen and (max-width: 600px) {
    & p,
    b {
      margin: 0.8rem 0;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;

export const Label = styled.b``;

export const Value = styled.p``;

export const BorderCountriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;

  @media (min-width: 600px) {
    max-width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;
  }
`;
