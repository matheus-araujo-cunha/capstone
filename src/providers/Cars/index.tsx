import axios from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api, imgurApi } from "../../services/api";

interface CarsProvidersProps {
  children: ReactNode;
}

interface Car {
  name: string;
  model: string;
  description: string;
  available: boolean;
  year: string;
  km: string;
  img: any;
  id: number;
  renterId?: number;
  pending: boolean;
  userId: string;
  clientId?: string;
}

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
  id: number;
  img: any;
  pending: boolean;
  available: boolean;
  userId: string;
  user: User;
}

interface CarsContextData {
  cars: CarSearch[];
  myCars: Car[];
  loadMyCars: (accessToken: string, userId: string) => Promise<void>;
  loadCars: (accessToken: string, userId: number) => Promise<void>;
  registerCar: (data: Omit<Car, "id">, accessToken: string) => Promise<void>;
  deleteCar: (accessToken: string, carId: number) => Promise<void>;
  updateCar: (data: Car, accessToken: string, userId: number) => Promise<void>;
  finishLocate: (
    accessToken: string,
    car: Car,
    clientId: number
  ) => Promise<void>;
  locateCar: (accessToken: string, car: Car, clientId: number) => Promise<void>;
}

const CarsContext = createContext<CarsContextData>({} as CarsContextData);

export const useCars = () => {
  const context = useContext(CarsContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};

export const CarsProviders = ({ children }: CarsProvidersProps) => {
  const [cars, setCars] = useState<CarSearch[]>([]);
  const [myCars, setMyCars] = useState<Car[]>([]);

  const idApiImgur = "ad930cc234bb93b";

  const registerCar = useCallback(
    async (car: Omit<Car, "id">, accessToken: string) => {
      axios
        .post("https://api.imgur.com/3/image", car.img, {
          headers: {
            Authorization: `Client-ID ${idApiImgur}`,
          },
        })
        .then((response) => {
          car.img = response.data.data.link;

          api
            .post("/cars", car, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((response) => {
              toast.success("Carro cadastrado com sucesso!");
              setCars((oldCars) => [...oldCars, response.data]);
              setMyCars((oldMyCars) => [...oldMyCars, response.data]);
            })
            .catch((error) => console.log(error));
        });
    },
    []
  );

  const loadMyCars = useCallback(
    async (accessToken: string, userId: string) => {
      api
        .get(`/cars?userId=${userId}`, {
          headers: {
            Authorization: `Bearer  ${accessToken}`,
          },
        })
        .then((response) => {
          setMyCars(response.data);
        });
    },
    []
  );

  const loadCars = useCallback(async (accessToken: string) => {
    api
      .get(`/cars?_expand=user`, {
        headers: {
          Authorization: `Bearer  ${accessToken}`,
        },
      })
      .then((response) => {
        setCars(response.data);
      });
  }, []);

  const deleteCar = useCallback(
    async (accessToken: string, carId: number) => {
      await api
        .delete(`/cars/${carId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          toast.success("Removido com sucesso!");
          const carsFiltered = myCars.filter((car) => car.id !== carId);

          setMyCars(carsFiltered);
        })
        .catch((err) => {
          toast.error("Ops, não foi possível remover");
        });
    },
    [myCars]
  );

  const findMyCar = useCallback(
    async (nameMyCar: string, accessToken: string, userId: number) => {
      const response = await api.get(
        `/cars?name_like=${nameMyCar}&userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setMyCars(response.data);
    },
    []
  );

  const findCar = useCallback(async (nameCar: string, accessToken: string) => {
    const response = await api.get(`/cars?name_like=${nameCar}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setCars(response.data);
  }, []);

  const locateCar = useCallback(
    async (accessToken: string, car: Car, clientId: number) => {
      const newData = { ...car, clientId: clientId };

      newData.available = false;

      api
        .patch(`/cars/${car.id}`, newData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => toast.success("Alugado com sucesso!"));
    },
    []
  );

  const finishLocate = useCallback(
    async (accessToken: string, car: Car, clientId: number) => {
      delete car.clientId;
      car.available = true;

      const newData = { ...car };

      api
        .patch(`/cars/${car.id}`, newData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => toast.success("Locação finalizada!"))
        .catch((err) => toast.error(err));
    },
    []
  );

  const updateCar = useCallback(
    async (data: Car, accessToken: string, userId: number) => {
      if (!!data.available) {
        data.available = false;
      } else {
        data.available = true;
      }

      await api
        .patch(
          `/cars/${data.id}`,
          { available: data.available, userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          toast.success("Atualizado com sucesso!");
          // const carsFiltered = cars.filter((car) => car.id !== data.id);
          // const car = cars.find((car) => car.id === data.id);
          // if (car) {
          //   data.available = !data.available;
          //   setCars([...carsFiltered, car]);
          // }
        })
        .catch((err) => toast.error("Não foi possível atualizar!"));
    },
    []
  );

  return (
    <CarsContext.Provider
      value={{
        cars,
        myCars,
        deleteCar,
        registerCar,
        loadMyCars,
        updateCar,
        loadCars,
        finishLocate,
        locateCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
