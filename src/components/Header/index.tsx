import {
  Container,
  TopHeaderSection,
  IconSection,
  Logo,
  MyCars,
  SearchCars,
  ToggleSection,
  FooterHeaderSection,
} from "./styles";

import UseMediaQuery from "@mui/material/useMediaQuery";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";

import LogoCar from "../../assets/logo.png";

export const Header = () => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  return (
    <Container isWideVersion={isWideVersion}>
      {isWideVersion ? (
        <>
          <Logo src={LogoCar} alt="Logo" />
          <ToggleSection>
            <MyCars>
              <h2>Meus Carros</h2>
            </MyCars>

            <SearchCars>
              <h2>Procurar Carros</h2>
            </SearchCars>
          </ToggleSection>
          <IconSection>
            <FiMessageSquare size={40} />
            <HiOutlineUser size={40} />
          </IconSection>
        </>
      ) : (
        <>
          <TopHeaderSection>
            <Logo src={LogoCar} alt="Logo" />

            <IconSection>
              <FiMessageSquare size={40} />
              <HiOutlineUser size={60} />
            </IconSection>
          </TopHeaderSection>

          <FooterHeaderSection>
            <ToggleSection>
              <MyCars>
                <h2>Meus Carros</h2>
              </MyCars>

              <SearchCars>
                <h2>Procurar Carros</h2>
              </SearchCars>
            </ToggleSection>
          </FooterHeaderSection>
        </>
      )}
    </Container>
  );
};
