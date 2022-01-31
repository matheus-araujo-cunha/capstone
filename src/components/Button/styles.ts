import styled from "styled-components";

interface ContainerProps {
  color?: string;
}

export const Container = styled.button<ContainerProps>`
  border: none;
  background-color: ${({ color }) =>
    color === "1" ? "#462A71" : color === "2" ? "#FA6300" : "#E60000"};
  color: white;
  max-width: 320px;
  width: 100%;
  height: 55px;
  max-height: 60px;
  border-radius: 8px;
  font-weight: 600;
  margin-left: 0px !important;
  transition: 0.2s ease-out;

  &:hover {
    background-color: ${({ color }) =>
      color === "1" ? "#495A74" : color === "2" ? "#FA8000" : "#e63946"};
  }
`;
