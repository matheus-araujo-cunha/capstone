import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Button } from "../Button";
import { CardButton, Container, Image } from "./styles";
import UseMediaQuery from "@mui/material/useMediaQuery";

interface CardCarProps {
  myCars?: boolean;
  handleOpenDetail: () => void;
}

export const CardCar = ({ myCars, handleOpenDetail }: CardCarProps) => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

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
      <Image
        src="https://img.r7.com/images/2015/08/31/9nrf8qm1g0_272chj3pu7_file?dimensions=771x420&no_crop=true"
        alt="carro"
      />
      <CardContent>
        <Box display="flex" gap={1}>
          <Typography gutterBottom variant="h5" component="div">
            Chevrolet
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Celta
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#333333", fontWeight: "500" }}
        >
          1.4 MI STD 8V FLEX 3P MANUAL
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {myCars ? (
          <CardButton myCars onClick={handleOpenDetail}>
            Detalhes
          </CardButton>
        ) : (
          <CardButton> Saiba mais </CardButton>
        )}
      </CardActions>
    </Card>
  );
};
