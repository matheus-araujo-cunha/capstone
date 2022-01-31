import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

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

  const registerCar = useCallback(async (data: Car, accessToken: string) => {
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
