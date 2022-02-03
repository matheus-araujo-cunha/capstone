import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useCars } from "../../providers/Cars";
import { CardCar } from "../CardCar";
import { CardPageSearch } from "../CardPageSearch";
import { Container } from "./styles";

interface User {
  name: string;
  email: string;
  id: number;
  password: string;
  state: string;
}
interface CarSearch {
  name: string;
  model: string;
  description: string;
  year: string;
  km: string;
  id?: number;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
  user: User;
}
interface ListCarsProps {
  handleOpenKnowMore: (car: CarSearch) => void;
}

export const ListCars = ({ handleOpenKnowMore }: ListCarsProps) => {
  const { loadCars, cars } = useCars();

  const { accessToken, user } = useAuth();

  useEffect(() => {
    loadCars(accessToken);
  }, []);

  const carsAvailable = cars.filter(
    (car) => car.available === true && car.userId !== user.id
  );

  return (
    <Container>
      {carsAvailable.map((car) => (
        <CardPageSearch
          handleOpenKnowMore={handleOpenKnowMore}
          key={car.id}
          searchCar={car}
        />
      ))}
    </Container>
  );
};
