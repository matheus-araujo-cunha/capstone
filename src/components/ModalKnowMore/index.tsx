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

interface ModalKnowMoreProps {
  open: boolean;
  handleClose: () => void;
  car: CarSearch;
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
            <Typography fontWeight="bold">{car.user?.name}</Typography>
            <Typography fontWeight="bold">{car.user?.state}</Typography>
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

        <Button color="1">Alugar</Button>
      </DialogActions>
    </Dialog>
  );
};
