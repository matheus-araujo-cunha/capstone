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
  userId: number;
}

interface CarsContextData {
  cars: Car[];
  myCars: Car[];
  loadMyCars: (accessToken: string, userId: number) => Promise<void>;
  loadCars: (accessToken: string, userId: number) => Promise<void>;
  registerCar: (data: Car, accessToken: string) => Promise<void>;
  deleteCar: (accessToken: string, carId: number) => Promise<void>;
  updateCar: (data: Car, accessToken: string, userId: number) => Promise<void>;
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
  const [cars, setCars] = useState<Car[]>([]);
  const [myCars, setMyCars] = useState<Car[]>([]);

  const idApiImgur = "d6c0826e017cfac";

  const registerCar = useCallback(async (data: Car, accessToken: string) => {
    axios
      .post("https://api.imgur.com/3/image", data.img, {
        headers: {
          Authorization: `Client-ID ${idApiImgur}`,
        },
      })
      .then((response) => {
        data.img = response.data.link;

        api
          .post("/cars", data, {
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
  }, []);

  const loadMyCars = useCallback(
    async (accessToken: string, userId: number) => {
      api
        .get(`/cars?userId=${userId}`, {
          headers: {
            Authorization: `Bearer  ${accessToken}`,
          },
        })
        .then((response) => {
          setCars(response.data);
        });
    },
    []
  );

  const loadCars = useCallback(async (accessToken: string) => {
    api
      .get(`/cars`, {
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
      api
        .delete(`/cars/${carId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          toast.success("Removido com sucesso!");
          const carsFiltered = cars.filter((car) => car.id !== carId);

          setCars(carsFiltered);
        })
        .catch((err) => {
          toast.error("Ops, não foi possível remover");
        });
    },
    [cars]
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

  const updateCar = useCallback(
    async (data: Car, accessToken: string, userId: number) => {
      await api
        .patch(
          `/cars/${data.id}`,
          { available: !data.available, userId },
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
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
