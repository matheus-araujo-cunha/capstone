import { CardCar } from "../CardCar";
import { Container } from "./styles";

interface ListMyCarsProps {
  handleOpenDetail: () => void;
}

export const ListMyCars = ({ handleOpenDetail }: ListMyCarsProps) => {
  return (
    <Container>
      {[1, 2, 3, 4].map((n, i) => (
        <CardCar key={i} myCars handleOpenDetail={handleOpenDetail} />
      ))}
    </Container>
  );
};
