import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { CardButton, Image } from "../CardCar/styles";

import UseMediaQuery from "@mui/material/useMediaQuery";

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

interface User {
  name: string;
  email: string;
  id: number;
  password: string;
  state: string;
}

interface CardPageSearchProps {
  searchCar: CarSearch;
  handleOpenKnowMore: (car: CarSearch) => void;
}

export const CardPageSearch = ({
  searchCar,
  handleOpenKnowMore,
}: CardPageSearchProps) => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  const openKnowMore = () => {
    handleOpenKnowMore(searchCar);
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
      <Image src={searchCar.img} alt="carro" />
      <CardContent>
        <Box display="flex" gap={1}>
          <Typography gutterBottom variant="h5" component="div">
            {`${searchCar.model
              ?.charAt(0)
              .toUpperCase()}${searchCar.model?.slice(1)}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`${searchCar.name?.charAt(0).toUpperCase()}${searchCar.name?.slice(
              1
            )}`}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#333333", fontWeight: "500" }}
        >
          {searchCar.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <CardButton onClick={openKnowMore}> Saiba mais </CardButton>
      </CardActions>
    </Card>
  );
};
