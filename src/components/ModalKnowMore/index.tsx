import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import { Button } from "../Button";
import UseMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import { useMessenger } from "../../providers/Messenger";
import { MessengerModal } from "../Modal/MessengerModal";
import { useState } from "react";

interface ModalKnowMoreProps {
  open: boolean;
  handleClose: () => void;
  car: CarSearch;
}
interface Car {
  name: string;
  age: string;
  km: string;
  description: string;
  propeietario: string;
  userId: number;
}

interface User {
  name: string;
  email: string;
  id: number;
  password: string;
  state?: string;
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
  user?: User;
}

export const ModalKnowMore = ({
  open,
  handleClose,
  car,
}: ModalKnowMoreProps) => {
  const isWideVersion = UseMediaQuery("(min-width: 768px)");



  const { sendEmail, isOpemModalMessengerFunction } = useMessenger();
  const [cars, setCars] = useState<Car>({
    name: "Chevrolet Corsa 2.0",
    age: "2018",
    km: "80.000",
    description: "1.4 MI STD 8V FLEX 3P MANUAL 1.4 MI STD 8V FLEX 3P MANUAL",
    propeietario: "Willian Gustavo",
    userId: 2,
  });
  
  const email = {
    from_name: "Willian",
    to_name: "Giovana Pereira de Santana",
    anuncio: "Silveirado 6c 4.2 Turbo 1999",
    periodo: "10 dias",
    email: "ra110059@uem.br",
    from_email: "ra110059@uem.br",
  };


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
          gap: isWideVersion ? "0" : "10px",
        }}
      >
        <img
          src={car.img}
          alt="carro"
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
            borderRadius: "8px",
          }}
        >
          <Typography>
            {car.model} {car.name}
          </Typography>
          <Typography>Ano - {car.year}</Typography>
          <Typography>KM - {car.km}</Typography>
          <Typography>{car.description} </Typography>
        </Paper>

        {!isWideVersion && (
          <Paper
            elevation={15}
            sx={{
              width: "100%",
              padding: "10px 20px",
              backgroundColor: "#FA6300",
              borderRadius: "8px",
              color: "white",
            }}
          >
            <Typography fontSize="15px" fontWeight="bold">
              Proprietário :
            </Typography>
            <Typography fontWeight="bold">Fulano de tal</Typography>
            <Typography fontWeight="bold">São Paulo</Typography>
          </Paper>
        )}
      </DialogContent>

      <DialogActions
        sx={{
          marginTop: isWideVersion ? "10px" : "0px",
          display: "flex",
          marginBottom: "30px",
          flexDirection: isWideVersion ? "row" : "column",
          marginLeft: "0",
          height: isWideVersion ? "170px" : "50px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {isWideVersion && (
          <Paper
            elevation={15}
            sx={{
              width: isWideVersion ? "45%" : "90%",

              padding: "10px 20px",
              backgroundColor: "#FA6300",
              borderRadius: "8px",
              color: "white",
              minHeight: "50px",
            }}
          >
            <Typography fontSize="15px" fontWeight="bold">
              Proprietário:
            </Typography>
            <Typography fontWeight="bold">{car.user?.name}</Typography>
            <Typography fontWeight="bold">{car.user?.state}</Typography>
          </Paper>
        )}
        <MessengerModal car={car} />
        <Button onClick={isOpemModalMessengerFunction} color="1">
          Alugar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
