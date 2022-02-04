import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Checkbox, TextField } from "@mui/material";
import {
  Form,
  Error,
  Container,
  P,
  ContainerImg,
  Title,
  ContainerForm,
  Text,
  Check,
} from "./styles";
import { Button } from "../../components/Button";
import img from "../../assets/register.svg";
import logo from "../../assets/logo.png";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface SignInCredentials {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  state: string;
  check: boolean;
}

export const Signup = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    state: yup.string().required("Estado obrigatório"),
    check: yup.bool().oneOf([true], "campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: SignInCredentials) => {
    api
      .post("/register", data)
      .then((response) => {
        history.push("/signin");
        toast.success("Cadastrado com sucesso!");
      })
      .catch((err) => {
        toast.error("Email ja cadastrado!");
      });
  };

  return (
    <Container>
      <ContainerForm>
        <Title>
          <section>
            <div className="title-1">Kenzie</div>
            <div className="title-2">CarShop</div>
          </section>
          <img src={logo} alt="logo" />
        </Title>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Text>
            <P>Cadastro</P>
            <img src={logo} alt="logo" />
          </Text>
          <TextField
            fullWidth
            id="login-basic"
            label="Nome"
            variant="outlined"
            {...register("name")}
          />
          <Error>
            {errors.name?.message && <span>{errors.name?.message}</span>}
          </Error>
          <TextField
            fullWidth
            id="login-basic"
            label="E-mail"
            variant="outlined"
            {...register("email")}
          />
          <Error>
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </Error>
          <TextField
            fullWidth
            type="password"
            id="password-basic"
            variant="filled"
            label="senha"
            {...register("password")}
          />
          <Error>
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </Error>
          <TextField
            fullWidth
            type="password"
            id="password-basic"
            label="Confirmar senha"
            variant="filled"
            {...register("confirm_password")}
          />
          <Error>
            {errors.confirm_password?.message && (
              <span>{errors.confirm_password?.message}</span>
            )}
          </Error>
          <TextField
            fullWidth
            id="password-basic"
            label="Estado"
            variant="filled"
            {...register("state")}
          />
          <Error>
            {errors.state?.message && <span>{errors.state?.message}</span>}
          </Error>

          <Check>
            <Checkbox {...register("check")} />
            <p>Tenho mais de 18 e possuo habilitação</p>
          </Check>
          <Error>
            {errors.check?.message && <span>{errors.check?.message}</span>}
          </Error>
          <Button type="submit" color="1">
            Cadastrar
          </Button>
        </Form>
      </ContainerForm>
      <ContainerImg>
        <img src={img} alt="img-cadastro" />
      </ContainerImg>
    </Container>
  );
};
