import { useContext, createContext, useState, ReactNode } from "react";

import emailjs from "@emailjs/browser";
import { string } from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface MessengerProviderData {
  sendEmail: ( messenger:string, date:string, car: Car) => void;
  isOpemModalMessenger: boolean;
  isOpemModalMessengerFunction: () => void;
}

interface MessengerProviderProps {
  children: ReactNode;
}

interface Car {
  name: string;
  age: string;
  km: string;
  description: string;
  propeietario: string;
  userId: number;
}

interface User {
  email: string;
  password: string;
  name: string;
  age: number;
  id: number;
}

const MessengerContext = createContext<MessengerProviderData>(
  {} as MessengerProviderData
);

export const MessengerProider = ({ children }: MessengerProviderProps) => {
  const [isOpemModalMessenger, SetIsOpemModalMessenger] = useState(false);
  const [user, setuser] = useState<User>({} as User);
  const [myUser, mySetUser] = useState<User>({} as User);

  const isOpemModalMessengerFunction = () => {
    if (isOpemModalMessenger) {
      SetIsOpemModalMessenger(false);
    } else {
      SetIsOpemModalMessenger(true);
    }
  };

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpbGxpYW5fZ19zX3NAaG90bWFpbC5jb20iLCJpYXQiOjE2NDM4NjQxNTEsImV4cCI6MTY0Mzg2Nzc1MSwic3ViIjoiMiJ9.kL8hb1fBmojOssopVvRDO0cQ8kcKZdd4xtdrryvamRg";

  const sendEmail = (messenger: string, date: string, car: Car) => {
    /* const accessToken = localStorage.getItem("@Capstone:accessToken") 
    const myuserId = localStorage.getItem("@Capstone:user"); */

    api
      .get(`/users/${car.userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setuser(response.data);
      })
      .catch((error) => console.log(error));

    api
      .get(`/users/${3}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        mySetUser(response.data);
      })
      .catch((error) => console.log(error));

    const messengerObj = {
      from_name: myUser.name,
      to_name: user.name,
      anuncio: car.name,
      periodo: date,
      to_email: user.email,
      from_email: myUser.email,
      messenger: messenger,
    };
    
    console.log(messengerObj, myUser, user);
    
     emailjs
      .send(
        "service_054gceb",
        "template_3q7o307",
        messengerObj,
        "user_RpYDllTq2WfO8xHTZFUZh"
      )
      .then(
        (result) => {
          toast.success("Email Eviado com sucesso!");
          console.log(result.text);
          isOpemModalMessengerFunction()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <MessengerContext.Provider
      value={{ sendEmail, isOpemModalMessenger, isOpemModalMessengerFunction }}
    >
      {children}
    </MessengerContext.Provider>
  );
};

export const useMessenger = () => useContext(MessengerContext);
