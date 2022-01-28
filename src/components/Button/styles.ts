import styled from "styled-components";

interface ContainerProps {
  primaryColor?: boolean;
}

export const Container = styled.button<ContainerProps>`
  border: none;
  background-color: ${(props) => (props.primaryColor ? "#462A71" : "#FA6300")};
  color: white;
  max-width: 320px;
  width: 100%;
  height: 55px;
  max-height: 60px;
  border-radius: 8px;
`;
