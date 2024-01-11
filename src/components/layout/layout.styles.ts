import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;

  position: fixed;
  top: var(--default-top-position);
  left: var(--default-left-position);

  background-color: var(--white);
  box-shadow: 0px 10px 10px -12px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  position: fixed;
  top: var(--default-top-position);
  left: var(--default-left-position);

  width: calc(100% - 4rem);
  height: var(--default-header-height);

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  color: var(--text-very-dark-blue);
  padding: 0 2rem;

  z-index: var(--header-z-index);
`;

export const Title = styled.b`
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;

  cursor: pointer;
`;
