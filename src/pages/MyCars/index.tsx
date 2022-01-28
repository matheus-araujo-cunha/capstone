import { InputAdornment, TextField } from "@mui/material";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, SearchArea, Section, Title } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { ModalRegistrationCar } from "../../components/ModalRegistrationCar";
import { ListMyCars } from "../../components/ListMyCars";
import { ModalDetailCar } from "../../components/ModalDetailCar";

export const MyCars = () => {
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  return (
    <Container>
      <ModalRegistrationCar open={open} handleClose={handleClose} />
      <ModalDetailCar open={openDetail} handleClose={handleCloseDetail} />
      <Header />
      <Section>
        <Button color="2" onClick={() => setOpen(true)}>
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
