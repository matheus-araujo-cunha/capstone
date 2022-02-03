import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerMobile = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .ctn-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 150px;
    }
    h1 {
      font-size: 2rem;
      width: 60%;
      text-align: center;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    max-width: 340px;
    width: 100%;
    align-items: center;

    button {
      width: 90%;
      height: 60px;
      cursor: pointer;
      margin-top: 20px;
      border-radius: 8px;
    }
    .btn-cadastro {
      background: #f26202;
      color: #ffff;
      font-weight: bold;
    }
    .btn-login {
      background: #462a71;
      color: #ffff;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const ContainerDesk = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;
  @media screen and (min-width: 700px) {
    display: block;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 85px;
  background-color: #462a71;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 75px;
    }
  }
  .container-buttons {
    button {
      width: 120px;
      height: 40px;
      border-radius: 21px;
      font-size: 20px;
      cursor: pointer;
      @media screen and (min-width: 1024px) {
        font-size: 24px;
      }
    }
    .btn-cadastro {
      background-color: #fff;
      color: #f26202;
    }
    .btn-login {
      background-color: #f26202;
      color: #fff;
    }
    button + button {
      margin-left: 30px;
    }
  }
`;

export const ContainerTitle = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 330px;
  background-color: #f26202;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 70px;

  h1 {
    color: #462a71;
    font-size: 4.5rem;
    @media screen and (min-width: 1024px) {
      font-size: 6rem;
    }
  }
  p {
    color: #fff;
    font-size: 1.5rem;
    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
  button {
    width: 140px;
    height: 45px;
    border-radius: 21px;
    cursor: pointer;
    background-color: #fff;
    color: #f26202;
    margin-top: 16px;
    font-size: 20px;
    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

export const ContainerSlider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  justify-content: center;
  align-items: center;

  .slider {
    width: 50%;
    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }

  .info-slider {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 40%;
    @media screen and (min-width: 1024px) {
      width: 45%;
    }
    h2 {
      font-size: 3rem;
      width: 60%;
      text-align: center;
      margin-bottom: 40px;
      @media screen and (min-width: 1024px) {
        font-size: 4rem;
      }
    }
    span {
      font-size: 1.2rem;
      color: #462a71;
      font-weight: bold;
      @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const ContainerInfo = styled.div`
  height: 360px;
  background-color: #462a71;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  .ctn-info-img {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
    img {
      width: 230px;
      @media screen and (min-width: 1024px) {
        width: 290px;
      }
    }
  }
  .ctn-info-description {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    color: #fff;

    h1 {
      text-align: end;
      font-size: 3.5rem;
      padding-right: 100px;
    }
    .ctn-info-text {
      width: 80%;
      margin-bottom: 20px;
      p {
        font-size: 2rem;
        color: #999999;
        @media screen and (min-width: 1024px) {
          font-size: 2.5rem;
        }
      }
    }
  }
`;

export const ContainerObjective = styled.div`
  width: 100%;
  margin-top: 50px;
  flex-direction: row;
  display: flex;

  .ctn-info-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    width: 60%;
    padding-left: 60px;
    h1 {
      font-size: 2rem;
      text-align: left;
      margin-bottom: 25px;
      @media screen and (min-width: 1024px) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 2rem;
      width: 80%;
      color: #999999;
    }
  }
  .ctn-img {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px) {
      width: 50%;
    }

    img {
      width: 240px;
      @media screen and (min-width: 1024px) {
        width: 290px;
      }
    }
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  height: 340px;
  flex-direction: column;
  color: #fff;
  background-color: #462a71;
  margin-top: 60px;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
  }
  div {
    width: 80%;
    padding: 50px 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (min-width: 1024px) {
      width: 60%;
    }
  }
  span {
    padding-top: 20px;
    font-size: 2rem;
    color: #999999;
  }
`;
