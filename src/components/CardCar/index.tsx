import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Button } from "../Button";
import { CardButton, Container, Image } from "./styles";
import UseMediaQuery from "@mui/material/useMediaQuery";

interface CardCarProps {
  handleOpenDetail: (car: Car) => void;
  car: Car;
}

interface Car {
  name: string;
  model: string;
  description: string;
  year: string;
  km: string;
  id: number;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
  clientId?: string;
}

export const CardCar = ({ handleOpenDetail, car }: CardCarProps) => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  const openDetailModal = () => {
    handleOpenDetail(car);
  };

  return (
    <Card
      sx={{
        width: isWideVersion ? "30%" : "100%",
        borderRadius: "25px",
        boxShadow: " 0 0 0 1px",
        backgroundColor: "#F4F5F6",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image src={car.img} alt="carro" />
      <CardContent>
        <Box display="flex" gap={1}>
          <Typography gutterBottom variant="h5" component="div">
            {car.model}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {car.name}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#333333", fontWeight: "500" }}
        >
          {car.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <CardButton myCars onClick={openDetailModal}>
          Detalhes
        </CardButton>
      </CardActions>
    </Card>
  );
};
