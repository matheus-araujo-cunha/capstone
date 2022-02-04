import { useContext, createContext, useState, ReactNode } from "react";

import emailjs from "@emailjs/browser";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../Auth";

interface MessengerProviderData {
  sendEmail: (messenger: string, date: string, car: CarSearch) => void;
  isOpemModalMessenger: boolean;
  isOpemModalMessengerFunction: () => void;
}

interface MessengerProviderProps {
  children: ReactNode;
}

/* interface SendEmailProps {
  messenger:string;
  date:string;
  car:CarSearch;
} */

interface User {
  name: string;
  email: string;
  id: number;
  password: string;
  state: string;
}
interface CarSearch {
  name: string;
  model: string;
  description: string;
  year: string;
  km: string;
  id?: number;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
  user?: User;
}

const MessengerContext = createContext<MessengerProviderData>(
  {} as MessengerProviderData
);

export const MessengerProider = ({ children }: MessengerProviderProps) => {
  const { user } = useAuth();
  const [isOpemModalMessenger, SetIsOpemModalMessenger] = useState(false);

  const isOpemModalMessengerFunction = () => {
    if (isOpemModalMessenger) {
      SetIsOpemModalMessenger(false);
    } else {
      SetIsOpemModalMessenger(true);
    }
  };

  const sendEmail = (messenger: string, date: string, car: CarSearch) => {
    const accessToken = localStorage.getItem("@Capstone:accessToken");

    /* api
      .get(`/users/${car.userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setuser(response.data);
      })
      .catch((error) => console.log(error)); */

    const messengerObj = {
      from_name: user.name,
      to_name: car.user?.name,
      anuncio: car.name,
      model: car.model,
      periodo: date,
      from_email: car.user?.email,
      to_email: user.email,
      messenger: messenger,
    };


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
          isOpemModalMessengerFunction();
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
