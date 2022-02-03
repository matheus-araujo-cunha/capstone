import styled from "styled-components";
import img from "../../assets/login.png";

export const Main = styled.div`
  color: #462a71;
  font-size: 35px;
  font-weight: 600;
/*   @media (min-width: 1000px) {
    font-size: 50px
  } */
`;
export const Second = styled.div`
  color: #fa6300;
  font-size: 30px;
  font-weight: 600;
  /* @media (min-width: 1000px) {
    font-size: 45px
  } */
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    display: none;
  }

  @media (min-width: 1000px) {
    
    img{
      display: flex;
      width: 50%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  .form {
    order: 1;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  @media (min-width: 1000px) {
    width: 40%;
    height: 100vh;
    flex-direction: column;
    .header {
      order: 2;
    }
  }
`;

export const Form = styled.form`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 20px;
  width: 95%;
  height: 100%;
  max-width: 442px;
  background-color:  #fff;
  border: 2px solid var(--color-secondary);
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media (min-width: 1000px) {
    width: 400px;
    height: 450px;
    align-items: center;
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
  width: 100%;
`;

export const Cade = styled.p`
  margin: 5px;
`;
