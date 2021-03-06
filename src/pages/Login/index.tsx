import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import img from "../../assets/login.png";
import {
  Form,
  Error,
  Container,
  P,
  Main,
  Second,
  Cade,
  Content,
} from "./styles";
import { Button } from "../../components/Button";
import { useAuth } from "../../providers/Auth";

interface SignInCredentials {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const onSubmitFunction = (data: SignInCredentials) => {
    signIn(data);
    // setTimeout(function () {
    //   window.location.reload();
    // }, 500);
    // setRefresh(!refresh);
  };

  return (
    <Content>
      <img src={img} />
      <Container>
        <Main> Kenzie </Main>
        <Second> Carshop</Second>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <P>Login</P>
          <div className="form">
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
              label="Password"
              variant="outlined"
              {...register("password")}
            />
            <Error>
              {errors.email?.message && <span>{errors.password?.message}</span>}
            </Error>
            <Button type="submit" color="2">
              Logar
            </Button>
            <Cade>Não possui conta? Cadastre-se!</Cade>
            <Button color="1" onClick={() => history.push("/signup")}>
              Ir para cadastro
            </Button>
          </div>
        </Form>
      </Container>
    </Content>
  );
};
export default Login;
