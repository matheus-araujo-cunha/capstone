import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  justify-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 435px;
    margin-top: 20px;
  }
`;

export const SectionLeft = styled.section`
  display: flex;
  width: 40%;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  max-width: 300px;
`;

export const SectionRight = styled(SectionLeft)`
  height: inherit;
`;

export const DivButton = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: flex-end;

  button {
    width: inherit;
  }
`;
