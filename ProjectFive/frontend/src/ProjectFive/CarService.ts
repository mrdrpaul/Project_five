import {Car} from "../CarType.ts";

export function fetchCars(): Promise<Car[]>{
    const mockedCars: Car[] = [
        {
            id: 1,
            make: 'Kia',
            model: 'Optima',
            year: 2020,
            price: 12500,
            vin: 'QWERTY1234567890Q',
            miles: 89900,
            color: 'black',
            isUsed: true,
            cleanTitle: true,
        }
    ]
    return Promise.resolve(mockedCars);
}
