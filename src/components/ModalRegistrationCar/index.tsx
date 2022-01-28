import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import UseMediaQuery from "@mui/material/useMediaQuery";

import { Button } from "../Button";
import { DivButton, Form, SectionLeft, SectionRight } from "./styles";

import CloseIcon from "@mui/icons-material/Close";

interface ModalRegistrationCarProps {
  handleClose: () => void;
  open: boolean;
}

export const ModalRegistrationCar = ({
  handleClose,
  open,
}: ModalRegistrationCarProps) => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  return (
    <Dialog
      scroll="paper"
      fullWidth={true}
      maxWidth={isWideVersion ? "lg" : "sm"}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClick={handleClose}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Cadastre seu carro
        <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
          <CloseIcon />
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Form>
          {isWideVersion ? (
            <>
              <SectionLeft>
                <TextField fullWidth label="Nome" />
                <TextField fullWidth label="Modelo" />
                <TextField fullWidth label="Descrição" />
                <TextField fullWidth label="Ano de fabricação" />
              </SectionLeft>
              <SectionRight>
                <TextField fullWidth label="Quilômetros rodados" />
                <TextField fullWidth type="file" />
                <DivButton>
                  <Button type="submit">Enviar</Button>
                </DivButton>
              </SectionRight>
            </>
          ) : (
            <>
              <TextField label="Nome" />
              <TextField label="Modelo" />
              <TextField label="Descrição" />
              <TextField label="Ano de fabricação" />
              <TextField label="Quilômetros rodados" />
              <TextField type="file" />
              <Button autoFocus onClick={handleClose}>
                Enviar
              </Button>
            </>
          )}
        </Form>
      </DialogContent>

      <DialogActions></DialogActions>
    </Dialog>
  );
};
