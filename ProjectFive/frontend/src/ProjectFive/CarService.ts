import {Car} from "../CarType.ts";
import axios, {AxiosResponse} from "axios";

type FetchCars = () => Promise<Car[]>;

export const fetchCars: FetchCars = () => (
    axios.get('/api/car')
        .then((r: AxiosResponse<Car[]>) => r.data)
)


export const CreateCar = (data:Car) => (
    axios.post("api/car/create", data)
        .then((r:AxiosResponse<Car[]>) => r.data)
)
