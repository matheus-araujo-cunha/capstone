import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, SearchArea, Section, Title } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { ModalRegistrationCar } from "../../components/ModalRegistrationCar";
import { ListMyCars } from "../../components/ListMyCars";
import { ModalDetailCar } from "../../components/ModalDetailCar";
import { useCars } from "../../providers/Cars";

interface Car {
  name:string;
  model:string;
  description: string;
  year:string;
  km:string;
  id:number;
  img: any;
  pending: boolean;
  available: boolean;
  ownerId: string;
}

export const MyCars = () => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const [selectedCar, setSelectedCar] = useState<Car>({} as Car);

  const { myCars } = useCars();

  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleOpenDetail = (car: Car) => {
    setSelectedCar(car);
    setOpenDetail(true);
  };

  return (
    <Container>
      <ModalRegistrationCar
        open={openRegistration}
        handleClose={handleCloseRegistration}
      />
      <ModalDetailCar
        open={openDetail}
        handleClose={handleCloseDetail}
        car={selectedCar}
      />
      <Header />
      <Section>
        <Button color="2" onClick={() => setOpenRegistration(true)}>
          Cadastrar um carro
        </Button>
        <SearchArea>
          <Title>
            <h2>Meus Carros</h2>
          </Title>
          <TextField
            placeholder="Pesquise seu carro"
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AiOutlineSearch />
                </InputAdornment>
              ),
            }}
          />
        </SearchArea>
      </Section>
      <ListMyCars handleOpenDetail={handleOpenDetail} />
    </Container>
  );
};
