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
} from "@mui/material";
import { useState } from "react";

interface UserProfileModalProps {
  handleCloseConfigurationModal: () => void;
  openConfigurationModal: boolean;
}

const ConfigurationModal = ({
  openConfigurationModal,
  handleCloseConfigurationModal,
}: UserProfileModalProps) => {
  const [state, setState] = useState();

  const handleSelect = () => {
    setState(state);
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Nova senha"
            type="password"
            fullWidth
            variant="standard"
          />
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel id="select-label">Estado</InputLabel>
            <Select
              labelId="select-label"
              id="state"
              value={state}
              onChange={handleSelect}
              sx={{ width: "auto", minWidth: "80px" }}
            >
              <MenuItem value="">
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfigurationModal}>Cancelar</Button>
          <Button
            onClick={handleCloseConfigurationModal}
            variant="contained"
            color="secondary"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { ConfigurationModal };
