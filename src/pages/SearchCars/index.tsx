import { useEffect, useState } from "react";
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
  search: string;
}

export const SearchCar = () => {
  const [openKnowMore, setOpenKnowMore] = useState<boolean>(false);
  const [carSelected, setCarSelected] = useState<CarSearch>({} as CarSearch);

  const [valueFilter, setvalueFilter] = useState("");

  const { myCars, findCar, cars, filterByState, loadCars } = useCars();

  const { user, accessToken } = useAuth();

  useEffect(() => {
    if (valueFilter === "10") {
      filterByState(user.state);
    } else if (valueFilter === "20") {
      loadCars(accessToken);
    }
  }, [valueFilter]);

  const handleCloseKnowMore = () => {
    setOpenKnowMore(false);
  };

  const handleOpenKnowMore = (car: CarSearch) => {
    setCarSelected(car);
    setOpenKnowMore(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setvalueFilter(event.target.value as string);
  };

  const isWideVersion = UseMediaQuery("(min-width: 768px)");

  const { register, handleSubmit } = useForm<SearchData>();

  const onSubmit = (data: SearchData) => {
    findCar(data.search, accessToken);
    console.log(cars);
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
          placeholder="Pesquise por um carro"
          size="medium"
          {...register("search")}
          InputProps={{
            endAdornment: (
              <InputAdornment
                component="button"
                type="submit"
                position="end"
                sx={{
                  border: "none",
                  padding: "10px 0",
                  maxWidth: "50px",
                  height: "100%",
                  width: "50%",
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
              value={valueFilter}
              label="Selecionar filtro"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value="10">Estado</MenuItem>
              <MenuItem value="20">Limpar filtro</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SearchArea>
      <ListCars handleOpenKnowMore={handleOpenKnowMore} />
    </Container>
  );
};
