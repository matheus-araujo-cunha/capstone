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

import UseMediaQuery from "@mui/material/useMediaQuery";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useCars } from "../../providers/Cars";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/Auth";

interface User {
  name: string;
  email: string;
  id: number;
  password: string;
  state: string;
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

interface SearchData {
  name: string;
}

export const SearchCar = () => {
  const [openKnowMore, setOpenKnowMore] = useState<boolean>(false);
  const [carSelected, setCarSelected] = useState<CarSearch>({} as CarSearch);

  const [teste, setTeste] = useState("");

  const handleCloseKnowMore = () => {
    setOpenKnowMore(false);
  };

  const handleOpenKnowMore = (car: CarSearch) => {
    setCarSelected(car);
    setOpenKnowMore(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTeste(event.target.value as string);
  };

  const isWideVersion = UseMediaQuery("(min-width: 768px)");

  const { myCars, findCar } = useCars();

  const { register, handleSubmit } = useForm<SearchData>();

  const { user, accessToken } = useAuth();

  const onSubmit = (data: SearchData) => {
    findCar(data.name, accessToken);
  };

  return (
    <Container>
      <ModalKnowMore
        open={openKnowMore}
        handleClose={handleCloseKnowMore}
        car={carSelected}
      />
      <Header />

      <SearchArea onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Pesquise por um carro"
          {...register("name")}
          InputProps={{
            endAdornment: (
              <InputAdornment
                component="button"
                type="submit"
                position="end"
                sx={{
                  border: "none",
                  padding: "10px 0",
                  height: "100%",
                  width: "25%",
                  maxWidth: "50px",
                  borderRadius: "8px",
                  backgroundColor: "orange",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AiOutlineSearch color="white" />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            width: isWideVersion ? "40%" : "100%",
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
