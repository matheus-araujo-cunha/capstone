import { useState } from "react";
import { Header } from "../../components/Header";
import { ListCars } from "../../components/ListCars";
import { ModalKnowMore } from "../../components/ModalKnowMore";
import { Container } from "./styles";

export const SearchCar = () => {
  const [openKnowMore, setOpenKnowMore] = useState<boolean>(false);

  const handleCloseKnowMore = () => {
    setOpenKnowMore(false);
  };

  const handleOpenKnowMore = () => {
    setOpenKnowMore(true);
  };

  return (
    <Container>
      <ModalKnowMore open={openKnowMore} handleClose={handleCloseKnowMore} />
      <Header />;
      <ListCars handleOpenKnowMore={handleOpenKnowMore} />
    </Container>
  );
};
