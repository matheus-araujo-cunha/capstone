import Carousel from "../../components/carousel";
import {
  Container,
  ContainerMobile,
  ContainerDesk,
  ContainerInfo,
  ContainerObjective,
  ContainerSlider,
  ContainerTitle,
  ContainerFooter,
  Header,
} from "./style";
import logoImg from "../../assets/car.png";
import logo from "../../assets/logo.png";
import imgEstrada from "../../assets/estrada.png";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
export const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <ContainerMobile>
        <div className="ctn-logo">
          <img src={logo} alt="logo2" />
          <h1>Kenzie CarShop</h1>
        </div>
        <div className="buttons">
          <button
            onClick={() => history.push("/signup")}
            className="btn-cadastro"
          >
            Cadastrar
          </button>
          <button onClick={() => history.push("/signin")} className="btn-login">
            Login
          </button>
        </div>
      </ContainerMobile>
      <ContainerDesk>
        <Header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="container-buttons">
            <Button
              className="btn-cadastro"
              onClick={() => history.push("/signup")}
            >
              Cadastro
            </Button>
            <Button
              className="btn-login"
              onClick={() => history.push("/signin")}
            >
              Login
            </Button>
          </div>
        </Header>
        <ContainerTitle>
          <h1>Kenzie Car Rental</h1>
          <p>A maior plataforma de aluguéis de carros C2C do Brasil</p>

          <Button onClick={() => history.push("/signin")}>Veja mais</Button>
        </ContainerTitle>
        <ContainerSlider>
          <div className="slider">
            <Carousel />
          </div>
          <div className="info-slider">
            <h2>Alguns dos nossos anúncios</h2>
            <span>Anúncie seu carro aqui também</span>
          </div>
        </ContainerSlider>

        <ContainerInfo>
          <div className="ctn-info-img">
            <img src={logoImg} alt="img-car" />
          </div>
          <div className="ctn-info-description">
            <h1>Quem somos</h1>
            <div className="ctn-info-text">
              <p>
                Somos uma plataforma de intermediações de aluguéis de veículos.
                Conectamos locadores privados aos locatários interessados de
                todo o Brasil.
              </p>
            </div>
          </div>
        </ContainerInfo>
        <ContainerObjective>
          <div className="ctn-info-text">
            <h1>O nosso objetivo</h1>
            <p>
              Temos como foco facilitar a conexão entre locadores e seus
              usuários interessados, colocando seu veículo para trabalhar,
              criando uma rede de mobilidade privada inovadora.
            </p>
          </div>
          <div className="ctn-img">
            <img src={imgEstrada} alt="estrada" />
          </div>
        </ContainerObjective>

        <ContainerFooter>
          <div>
            <h1>Por que anúnciar conosco</h1>
            <span>
              Todos os contratos de aluguéis são negociados diretamente entre os
              interessados. Nossa plataforma segura garante uma ótima
              experiência e abrangência, a um custo bem baixo.
            </span>
          </div>
        </ContainerFooter>
      </ContainerDesk>
    </Container>
  );
};
