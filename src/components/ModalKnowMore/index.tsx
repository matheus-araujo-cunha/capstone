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
}

export const ModalKnowMore = ({ open, handleClose }: ModalKnowMoreProps) => {
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
          src="https://2img.net/h/oi62.tinypic.com/dqr6l5.jpg"
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
          <Typography>Chevrolet Corsa 2.0</Typography>
          <Typography>Ano - 2018</Typography>
          <Typography>KM - 80.000</Typography>
          <Typography>
            1.4 MI STD 8V FLEX 3P MANUAL 1.4 MI STD 8V FLEX 3P MANUAL
          </Typography>
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
              //   minHeight: "50px",
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
              Proprietário :
            </Typography>
            <Typography fontWeight="bold">Fulano de tal</Typography>
            <Typography fontWeight="bold">São Paulo</Typography>
          </Paper>
        )}

        <Button color="1">Alugar</Button>
      </DialogActions>
    </Dialog>
  );
};
