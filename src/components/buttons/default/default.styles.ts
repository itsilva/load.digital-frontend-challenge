import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkAsButton = styled(Link)`
  width: fit-content;
  padding: 0.2rem 1rem;

  border-radius: 0.4rem;

  background-color: hsl(0, 0%, 98%);

  color: hsl(200, 15%, 8%);
  text-decoration: none;
  text-transform: capitalize;

  box-shadow: 0px 0px 12px 6px hsl(0, 0%, 90%);
`;
