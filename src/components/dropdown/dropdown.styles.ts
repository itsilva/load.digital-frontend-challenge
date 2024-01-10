import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const Label = styled.button`
  width: 12rem;
  height: 2.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  border: none;
  border-radius: 0.4rem;
  background-color: var(--white);

  cursor: pointer;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const Options = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  right: var(--default-right-position);
  width: 12rem;
  margin: 0.8rem 0;
  padding: 0;

  border-radius: 0.4rem;
  background-color: var(--white);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: var(--controls-z-index);

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const Option = styled.li`
  width: 100‰;

  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  cursor: pointer;
`;
