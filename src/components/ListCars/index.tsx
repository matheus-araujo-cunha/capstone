import { useState } from "react";
import { CardCar } from "../CardCar";
import { Container } from "./styles";

interface ListCarsProps {
  handleOpenKnowMore: () => void;
}

export const ListCars = ({ handleOpenKnowMore }: ListCarsProps) => {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((n, i) => (
        <CardCar handleOpenKnowMore={handleOpenKnowMore} key={i} />
      ))}
    </Container>
  );
};
