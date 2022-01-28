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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ModalRegistrationCarProps {
  handleClose: () => void;
  open: boolean;
}

interface DataRegisterCar {
  name: string;
  modelo: string;
  description: string;
  year: string;
  km: string;
  file: any;
}

export const ModalRegistrationCar = ({
  handleClose,
  open,
}: ModalRegistrationCarProps) => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRegisterCar>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: DataRegisterCar) => console.log(data);

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isWideVersion ? (
            <>
              <SectionLeft>
                <TextField fullWidth label="Nome" {...register("name")} />
                <TextField fullWidth label="Modelo" {...register("modelo")} />
                <TextField
                  fullWidth
                  label="Descrição"
                  {...register("description")}
                />
                <TextField
                  fullWidth
                  label="Ano de fabricação"
                  {...register("year")}
                />
              </SectionLeft>
              <SectionRight>
                <TextField
                  fullWidth
                  label="Quilômetros rodados"
                  {...register("km")}
                />
                <TextField fullWidth type="file" {...register("file")} />
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
              <Button type="submit" autoFocus onClick={handleClose}>
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
