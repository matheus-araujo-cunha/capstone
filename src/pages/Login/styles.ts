import styled from "styled-components";
import img from "../../assets/login.png";

export const Main = styled.div`
  color: #462a71;
  font-size: 50px;
  margin-top: -100px;
  margin-left: -50px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Second = styled.div`
  color: #fa6300;
  font-size: 40px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Content = styled.div`
  img {
    display: only;
    margin-top: 200px;
    width: 100%;
  }
  @media (min-width: 1000px) {
    background-image: url(${img});
  }
`;

export const Container = styled.div`
  padding: 20px 10px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (min-width: 1000px) {
    padding: 20px 10px 10px 700px;
    flex-direction: column;
    justify-content: center;

    .header {
      order: 2;
    }
    .form {
      order: 1;
      margin-right: 40px;
      display: block;
      max-width: 442px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px 0px 10px 30px;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  max-width: 442px;
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media (min-width: 1000px) {
    width: 700px;
    height: 450px;
  }
`;

export const Error = styled.ul`
  margin: 0px;
  text-align: start;
  margin-bottom: 15px;
  font-size: 10px;
  color: rgb(240, 42, 42);
  padding: 0px 0px 0px 5px;
  li {
    list-style: inside;
  }
`;

export const P = styled.p`
  color: #fa6300;
  margin-bottom: 30px;
`;

export const Cade = styled.p`
  margin: 5px;
`;
