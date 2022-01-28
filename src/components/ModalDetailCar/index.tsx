import {
  Box,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import UseMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "../Button";

import CloseIcon from "@mui/icons-material/Close";

interface ModalDetailCarProps {
  open: boolean;
  handleClose: () => void;
}

export const ModalDetailCar = ({ open, handleClose }: ModalDetailCarProps) => {
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
          gap: isWideVersion ? "0" : "5px",
        }}
      >
        <img
          src="https://quatrorodas.abril.com.br/wp-content/uploads/2020/09/Kombi-modelo-1959-vers%C3%A3o-luxo-da-Volkswagen-pertencente-a-Francisco-Varca-J%C3%BAni_2_2.jpg?quality=70&strip=info"
          alt="carro"
          style={{
            width: isWideVersion ? "50%" : "100%",
            borderRadius: "10px",
          }}
        />
        <Box
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
          <Typography>Volkswagen Kombi</Typography>
          <Typography>Ano - 2000</Typography>
          <Typography>KM - 80.000</Typography>
          <Typography>
            1.4 MI STD 8V FLEX 3P MANUAL 1.4 MI STD 8V FLEX 3P MANUAL
          </Typography>
        </Box>
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
        <Button color="2">Desabilitar</Button>
        <Button>Remover Carro</Button>
      </DialogActions>
    </Dialog>
  );
};
