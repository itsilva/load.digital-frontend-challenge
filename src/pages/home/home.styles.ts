import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 4rem);
  height: calc(100% - 12rem);
  margin-top: 4rem;
  padding: 4rem 2rem;
  background-color: var(--bg-very-light-grey);
`;

export const CountriesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media (min-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1180px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
  }
`;

export const CountriesListControls = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }
`;
