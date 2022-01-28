import { InputAdornment, TextField } from "@mui/material";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, ListMyCars, SearchArea, Section, Title } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { ModalRegistrationCar } from "../../components/ModalRegistrationCar";

export const MyCars = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <ModalRegistrationCar open={open} handleClose={handleClose} />
      <Header />
      <Section>
        <Button onClick={() => setOpen(true)}>Cadastrar um carro</Button>
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
      <ListMyCars />
    </Container>
  );
};
