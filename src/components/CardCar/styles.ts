import styled from "styled-components";

export const Container = styled.li`
  width: inherit;
`;

interface CardButtonProps {
  myCars?: boolean;
}
export const CardButton = styled.button<CardButtonProps>`
  border: 2px solid;
  background-color: ${({ myCars }) => (myCars ? "#FA6300" : "#462A71")};
  color: white;
  font-weight: 500;
  height: 50px;
  width: 50%;
  max-width: 200px;
  border-radius: 33px;
  justify-self: flex-end;
  font-family: "sans-serif";

  &:hover {
    filter: contrast(160%);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 300px;
`;
