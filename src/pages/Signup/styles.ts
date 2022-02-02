import styled from "styled-components";
import img from "../../assets/register.svg";

export const Container = styled.div`
  /* padding: 20px 10px 10px 20px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 1000px) {
    /* padding: 20px 10px 10px 700px; */
    /* flex-direction: column;
    justify-content: center; */

    .header {
      order: 2;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 140px;

  section {
    display: flex;
    font-weight: bold;
  }

  img {
    width: 90px;
    margin-left: 20px;
  }
  .title-1 {
    color: #462a71;
    font-size: 66px;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .title-2 {
    color: #fa6300;
    font-size: 66px;
    margin-left: 12px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
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

export const Text = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  img {
    width: 50px;
    margin-bottom: 10px;
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;

export const P = styled.p`
  color: #fa6300;
  text-align: left;
  margin-bottom: 10px;
  font-size: 22px;
  width: 100%;
  font-weight: bold;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerImg = styled.div`
  width: 60%;
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
  img {
    margin-bottom: 70px;
  }
  @media (min-width: 1000px) {
    background-repeat: no-repeat;
    background-image: url(${img});
  }
`;
