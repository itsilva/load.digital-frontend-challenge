import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkAsButton = styled(Link)`
  width: fit-content;
  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  padding: 0.2rem 1.8rem;

  border-radius: 0.4rem;
  background-color: var(--white);
  color: var(--text-very-dark-blue);
  text-decoration: none;
  text-transform: capitalize;

  box-shadow: 0px 0px 12px 6px hsl(0, 0%, 90%);
`;
