import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  height: 140px;
  width: 80%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 100px;
    align-items: center;
    justify-content: space-between;
  }
`;
