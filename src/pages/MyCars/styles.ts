import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 99%;
  height: 130px;
  display: flex;
  align-items: center;
  gap: 16%;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 10px;

  button {
    margin-right: 10px;
    width: 60%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    gap: 8%;
    justify-content: space-between;

    button {
      width: 25%;
    }
  }
`;

export const Title = styled.div`
  width: 45%;
  font-size: 22px;
  color: var(--grey-600);
  text-align: center;
  color: var(--grey-500);
`;

export const SearchArea = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 50%;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 80%;
  }
`;

export const ListMyCars = styled.ul``;
