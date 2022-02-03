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
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/Auth";

interface Car {
  name: string;
  model: string;
  description: string;
  year: string;
  km: string;
  id: number;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
}

interface NameData {
  name: string;
}

export const MyCars = () => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const [selectedCar, setSelectedCar] = useState<Car>({} as Car);

  const { myCars, findMyCar } = useCars();

  const { register, handleSubmit } = useForm<NameData>();

  const { user, accessToken } = useAuth();



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

  const onSubmit = (data: NameData) => {
    
    findMyCar(data.name, accessToken, Number(user.id));
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
        <SearchArea onSubmit={handleSubmit(onSubmit)}>
          <Title>
            <h2>Meus Carros</h2>
          </Title>
          <TextField
            placeholder="Pesquise seu carro"
            size="medium"
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
        </SearchArea>
      </Section>
      <ListMyCars handleOpenDetail={handleOpenDetail} />
    </Container>
  );
};
function UseMediaQuery(arg0: string) {
  throw new Error("Function not implemented.");
}

