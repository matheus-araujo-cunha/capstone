import {
  Dialog,
  TextField,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useMessenger } from "../../providers/Messenger";
import { AiOutlineClose } from "react-icons/ai";
import { Conteiner, Header } from "./styled";
import { Button } from "../Button";
import { useState } from "react";

interface MessengerModalPros {
  car: {
    name: string;
    age: string;
    km: string;
    description: string;
    propeietario: string;
    userId: number;
  };
}
const MessengerModal = ({ car }: MessengerModalPros) => {
  const [data, setData] = useState("");
  const [messenger, setMessenger] = useState("");

  const user = {
    name: "Giovana Santana",
    local: "Maringá",
  };

  const { isOpemModalMessengerFunction, isOpemModalMessenger, sendEmail } =
    useMessenger();

  return (
    <>
      <Dialog open={isOpemModalMessenger}>
        <Conteiner>
          <Header>
            <p>Contactar Proprietario</p>
            <AiOutlineClose onClick={isOpemModalMessengerFunction} />
          </Header>
          <DialogContentText>Veiculo: {car.name}</DialogContentText>
          <DialogContentText>Ano: {car.age}</DialogContentText>
          <DialogContentText>
            Proprietario: {car.propeietario}
          </DialogContentText>
          {/* <DialogContentText>Cidade: {user.local}</DialogContentText> */}
          <DialogContentText></DialogContentText>

          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="dias"
              label="Periodo"
              type="number"
              fullWidth
              variant="standard"
              placeholder="Qauntos dias você deseja alugar?"
              onChange={(e) => setData(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="messenger"
              label="Mensagem"
              type="text"
              fullWidth
              variant="standard"
              placeholder="Mensagem para proprietario"
              onChange={(e) => setMessenger(e.target.value)}
            />
            <Button color="1" onClick={() => sendEmail(messenger, data, car)}>
              Enviar
            </Button>
          </DialogContent>
        </Conteiner>
      </Dialog>
    </>
  );
};

export { MessengerModal };
