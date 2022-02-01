import { useState } from "react";
import { Header } from "../../components/Header";
import { ListCars } from "../../components/ListCars";
import { ModalKnowMore } from "../../components/ModalKnowMore";
import { Container, SearchArea } from "./styles";

import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

import Select, { SelectChangeEvent } from "@mui/material/Select";

export const SearchCar = () => {
  const [openKnowMore, setOpenKnowMore] = useState<boolean>(false);

  const [teste, setTeste] = useState("");

  const handleCloseKnowMore = () => {
    setOpenKnowMore(false);
  };

  const handleOpenKnowMore = () => {
    setOpenKnowMore(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTeste(event.target.value as string);
  };

  return (
    <Container>
      <ModalKnowMore open={openKnowMore} handleClose={handleCloseKnowMore} />
      <Header />

      <SearchArea>
        <TextField
          label="Pesquise por um carro"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AiOutlineSearch />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Filtrar por:</Typography>
          <FormControl
            sx={{
              width: "70%",
              display: "flex",
            }}
            error={false}
            // disabled
          >
            <InputLabel>Selecionar filtro</InputLabel>
            <Select
              value={teste}
              label="Selecionar filtro"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value="10">Estado</MenuItem>
              <MenuItem value="20">Ordem altabética</MenuItem>
              <MenuItem value="30">Ano do carro</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SearchArea>
      <ListCars handleOpenKnowMore={handleOpenKnowMore} />
    </Container>
  );
};
