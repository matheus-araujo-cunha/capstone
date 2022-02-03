import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import UseMediaQuery from "@mui/material/useMediaQuery";

import { Button } from "../Button";
import { DivButton, Form, SectionLeft, SectionRight } from "./styles";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCars } from "../../providers/Cars";
import { useAuth } from "../../providers/Auth";

interface ModalRegistrationCarProps {
  handleClose: () => void;
  open: boolean;
}

interface DataRegisterCar {
  name: string;
  model: string;
  description: string;
  year: string;
  km: string;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
}

export const ModalRegistrationCar = ({
  handleClose,
  open,
}: ModalRegistrationCarProps) => {
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome do carro obrigatório"),
    model: yup.string().required("Modelo de carro obrigatório"),
    description: yup.string().required("Descrição de carro obrigatória"),
    year: yup.string().required("Ano do carro obrigaório"),
    km: yup.string().required("Quilometragem do carro obrigatória"),
    img: yup.mixed().required("Arquivo de imagem obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRegisterCar>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: DataRegisterCar) => {
    console.log(data);
    const newData = {
      ...data,
      available: true,
      userId: user.id,
      pending: false,
    };
    const dataImage = new FormData();
    dataImage.append("image", data.img[0]);

    newData.img = dataImage;

    registerCar(newData, accessToken);
    handleClose();
  };
  const { registerCar } = useCars();
  const { accessToken, user } = useAuth();

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
                <TextField
                  fullWidth
                  label="Nome"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  error={!!errors.model}
                  helperText={errors.model?.message}
                  fullWidth
                  label="Modelo"
                  {...register("model")}
                />
                <TextField
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  fullWidth
                  label="Descrição"
                  {...register("description")}
                />
                <TextField
                  error={!!errors.year}
                  helperText={errors.year?.message}
                  fullWidth
                  label="Ano de fabricação"
                  {...register("year")}
                />
              </SectionLeft>
              <SectionRight>
                <TextField
                  error={!!errors.km}
                  helperText={errors.km?.message}
                  fullWidth
                  label="Quilômetros rodados"
                  {...register("km")}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Insira imagem do carro</Typography>
                  <TextField
                    placeholder="Teste"
                    error={!!errors.img}
                    helperText={errors.img?.message}
                    {...register("img")}
                    type="file"
                  />
                </Box>
                <DivButton>
                  <Button type="submit">Enviar</Button>
                </DivButton>
              </SectionRight>
            </>
          ) : (
            <>
              <TextField
                error={!!errors.name}
                helperText={errors.name?.message}
                label="Nome"
              />
              <TextField
                error={!!errors.model}
                helperText={errors.model?.message}
                label="Modelo"
              />
              <TextField
                error={!!errors.description}
                helperText={errors.description?.message}
                label="Descrição"
              />
              <TextField
                error={!!errors.year}
                helperText={errors.year?.message}
                label="Ano de fabricação"
              />
              <TextField
                error={!!errors.km}
                helperText={errors.km?.message}
                label="Quilômetros rodados"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Insira imagem do carro</Typography>
                <TextField
                  placeholder="Teste"
                  error={!!errors.img}
                  helperText={errors.img?.message}
                  type="file"
                  {...register("img")}
                />
              </Box>

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
