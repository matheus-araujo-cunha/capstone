import {
  Box,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";

import UseMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "../Button";

import CloseIcon from "@mui/icons-material/Close";
import { useCars } from "../../providers/Cars";
import { useAuth } from "../../providers/Auth";

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
  clientId?:string;
}
interface ModalDetailCarProps {
  open: boolean;
  handleClose: () => void;
  car: Car;
}

export const ModalDetailCar = ({
  open,
  handleClose,
  car,
}: ModalDetailCarProps) => {
  const isWideVersion = UseMediaQuery("(min-width: 768px)");

  const { updateCar, deleteCar } = useCars();
  const { accessToken, user } = useAuth();

  const handleUptadeCar = () => {
    updateCar(car, accessToken, Number(user.id));
    handleClose();
  };

  const handleDeleteCar = () => {
    deleteCar(accessToken, car.id);
    handleClose();
  };

  console.log(car);

  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={handleClose}
      scroll={isWideVersion ? "body" : "paper"}
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          component="button"
          onClick={handleClose}
          display="flex"
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          <CloseIcon />
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: isWideVersion ? "row" : "column",
          gap: isWideVersion ? "0" : "5px",
        }}
      >
        <img
          src={car.img}
          alt={car.name}
          style={{
            width: isWideVersion ? "50%" : "100%",
            borderRadius: "10px",
          }}
        />
        <Paper
          elevation={5}
          sx={{
            backgroundColor: "#F4F5F6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: isWideVersion ? "45%" : "100%",
            boxSizing: "border-box",
            padding: "10px 20px",
            fontFamily: "sans-serif",
            borderRadius: "8px",
          }}
        >
          <Typography>
            {car.model} {car.name}
          </Typography>
          <Typography>Ano - {car.year}</Typography>
          <Typography>KM - {car.km}</Typography>
          <Typography>{car.description}</Typography>
        </Paper>
      </DialogContent>
      <DialogActions
        sx={{
          marginTop: isWideVersion ? "40px" : "0px",
          display: "flex",
          marginBottom: "30px",
          flexDirection: isWideVersion ? "row" : "column",
          marginLeft: "0",
          height: "140px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button color="2" onClick={handleUptadeCar}>
          {car.available ? "Desabilitar" : "Habilitar"}
        </Button>
        <Button onClick={handleDeleteCar}>Remover Carro</Button>
      </DialogActions>
    </Dialog>
  );
};
