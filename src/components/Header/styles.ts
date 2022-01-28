import styled from "styled-components";

interface ContainerProps {
  isWideVersion: boolean;
}

export const Container = styled.header<ContainerProps>`
  background-color: var(--color-primary);
  width: 100%;
  height: ${(props) => (props.isWideVersion ? "100px" : "165px")};
  display: flex;
  flex-direction: ${(props) => (props.isWideVersion ? "row" : "column")};
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 75px;
  height: 60px;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const ToggleSection = styled.nav`
  align-items: center;
  background-color: var(--color-secondary);
  width: 85%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;

export const TopHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45%;
`;

export const FooterHeaderSection = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyCars = styled.button`
  margin-left: 4px;
  border: none;
  width: 50%;
  padding: 15px 0;
  color: white;
  font-family: "Helvetica", "Roboto";
  font-weight: 500;
  font-size: 1rem;
  background-color: var(--grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  max-height: 50px;
  text-align: center;
  h2 {
    height: inherit;
  }
`;

export const SearchCars = styled(MyCars)`
  background-color: inherit;
  margin-left: 0;
  margin-right: 4px;
`;

export const IconSection = styled.div`
  width: 30%;
  margin-right: 10px;
  max-width: 120px;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    color: var(--grey-0);
    min-height: 30px;
    min-width: 30px;
    max-width: 35px;
    max-height: 35px;
  }
`;
