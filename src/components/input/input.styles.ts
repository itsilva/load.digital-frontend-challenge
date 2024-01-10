import styled from "styled-components";

export const Wrapper = styled.div`
  width: 34%;
  height: 2.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  border: none;
  border-radius: 0.4rem;

  background: var(--white);
  color: var(--text-very-dark-blue);
  padding: 0 2rem;

  @media only screen and (max-width: 425px) {
    width: calc(100% - 4rem);
  }
`;

export const DefaultInput = styled.input`
  height: 80%;
  width: 80%;
  border: none;

  &:focus {
    outline: none;
  }
`;
