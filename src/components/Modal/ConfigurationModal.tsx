import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { api } from "../../services/api";

interface UserProfileModalProps {
  handleCloseConfigurationModal: () => void;
  openConfigurationModal: boolean;
}

interface UserData {
  name: string;
  description: string;
  city: string;
  state: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  city: string;
  state: string;
  description: string;
  password: string;
}

const ConfigurationModal = ({
  openConfigurationModal,
  handleCloseConfigurationModal,
}: UserProfileModalProps) => {
  const { user, accessToken, setData } = useAuth();
  const [state, setState] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>();

  const handleSelect = () => {
    setState(state);
  };

  const onSubmitForm = (data: UserData) => {
    const objectValues = Object.values(data);

    if (objectValues.every((value) => value.length === 0)) {
      handleCloseConfigurationModal();
    } else {
      api
        .patch(`users/${user.id}`, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response: AxiosResponse<User>) => {
          const user = response.data;

          setData({ accessToken, user });
          localStorage.setItem("@Capstone:user", JSON.stringify(user));
        })
        .catch((err) => console.log(err));

      handleCloseConfigurationModal();
      reset();
    }
  };

  return (
    <>
      <Dialog
        open={openConfigurationModal}
        onClose={handleCloseConfigurationModal}
      >
        <DialogTitle>Configuração</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Faça as alterações que achar necessário e depois clique em salvar.
          </DialogContentText>
          <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
            <TextField
              margin="dense"
              id="name"
              label="Nome"
              type="text"
              {...register("name")}
              fullWidth
              variant="standard"
              defaultValue={user?.name || ""}
            />
            <TextField
              margin="dense"
              id="description"
              label="Descrição"
              {...register("description")}
              type="text"
              fullWidth
              multiline
              variant="standard"
              defaultValue={user?.description || ""}
            />
            <TextField
              margin="dense"
              id="city"
              label="Cidade"
              {...register("city")}
              type="text"
              fullWidth
              variant="standard"
              defaultValue={user?.city || ""}
            />
            <FormControl sx={{ mt: 1 }} variant="standard">
              <InputLabel id="select-label">Estado</InputLabel>
              <Select
                labelId="select-label"
                id="state"
                {...register("state")}
                value={state}
                defaultValue={user?.state || ""}
                onChange={handleSelect}
                sx={{ width: "auto", minWidth: "80px" }}
              >
                <MenuItem value={user?.state || ""}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value="AC">Acre</MenuItem>
                <MenuItem value="AL">Alagoas</MenuItem>
                <MenuItem value="AP">Amapá</MenuItem>
                <MenuItem value="AM">Amazonas</MenuItem>
                <MenuItem value="BA">Bahia</MenuItem>
                <MenuItem value="CE">Ceará</MenuItem>
                <MenuItem value="DF">Distrito Federal</MenuItem>
                <MenuItem value="ES">Espírito Santo</MenuItem>
                <MenuItem value="GO">Goiás</MenuItem>
                <MenuItem value="MA">Maranhão</MenuItem>
                <MenuItem value="MT">Mato Grosso</MenuItem>
                <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                <MenuItem value="MG">Minas Gerais</MenuItem>
                <MenuItem value="PA">Pará</MenuItem>
                <MenuItem value="PB">Paraíba</MenuItem>
                <MenuItem value="PR">Paraná</MenuItem>
                <MenuItem value="PE">Pernambuco</MenuItem>
                <MenuItem value="PI">Piauí</MenuItem>
                <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                <MenuItem value="RO">Rondônia</MenuItem>
                <MenuItem value="RR">Roraima</MenuItem>
                <MenuItem value="SC">Santa Catarina</MenuItem>
                <MenuItem value="SP">São Paulo</MenuItem>
                <MenuItem value="SE">Sergipe</MenuItem>
                <MenuItem value="TO">Tocantins</MenuItem>
                <MenuItem value="EX">Estrangeiro</MenuItem>
              </Select>
            </FormControl>
            <DialogActions>
              <Button onClick={handleCloseConfigurationModal}>Cancelar</Button>
              <Button variant="contained" type="submit" color="secondary">
                Salvar
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ConfigurationModal };
