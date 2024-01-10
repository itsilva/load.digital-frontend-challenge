import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.article`
  background: white;
  width: 100%;
  height: 20rem;
  border-radius: 0.2rem;

  box-shadow: 0px 10px 10px -12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  text-transform: none;

  color: black;
`;

export const CardHeader = styled.div``;

export const CardContent = styled.div`
  width: 100&;
  height: 8rem;
  padding: 1rem 1.4rem;
`;

export const Paragraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  font-size: 14px;
  font-weight: 300;
`;

export const Title = styled.h3`
  height: 4rem;
  margin: 0.4rem 0;
  padding: 0;
`;

export const Label = styled.b`
  padding: 0;
  margin: 0;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;

export const Flag = styled.img`
  height: 8rem;
  width: 100%;
  object-fit: cover;

  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
`;
