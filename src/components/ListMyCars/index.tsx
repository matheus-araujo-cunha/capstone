import { useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import { useCars } from "../../providers/Cars";
import { CardCar } from "../CardCar";
import { Container } from "./styles";
interface Car {
  name: string;
  model: string;
  description: string;
  year: string;
  id: number;
  km: string;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
  clientId?: string;
}
interface ListMyCarsProps {
  handleOpenDetail: (car: Car) => void;
}

export const ListMyCars = ({ handleOpenDetail }: ListMyCarsProps) => {
  const { loadMyCars, myCars } = useCars();

  const { accessToken, user } = useAuth();

  useEffect(() => {
    loadMyCars(accessToken, user.id);
  }, []);

  return (
    <Container>
      {myCars.map((car) => (
        <CardCar key={car.id} handleOpenDetail={handleOpenDetail} car={car} />
      ))}
    </Container>
  );
};
