import {afterAll, afterEach, beforeAll, describe, expect, it} from "vitest";
import {Car} from "../../CarType";
import axios from "axios";
import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {CreateCar, fetchCars} from "../CarService";


describe('Car Service',()=>{
    axios.defaults.baseURL = "http://localhost:3000"

    const server = setupServer()
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    it('should fetch cars', async() => {
        const expected: Car[]= [
            {id: 1, make: 'Ford', model: 'Mustang', year: 2017, price: 30000.65,used: true},
            {id: 2, make: 'Kia', model: 'Optima', year: 2020, price: 13500,used: true},
            {id: 3, make: 'Chevy', model: 'Silverado', year: 2025, price: 60000.34,used: false},
        ];
        server.use(http.get('/api/car', () =>
            HttpResponse.json(expected, {status: 201})
        ))

        expect(await fetchCars()).toStrictEqual(expected);

    })

    it('should pass car data to database', async () => {
    const fakeCar: Car = {id: 1, make: 'Ford', model: 'Mustang', year: 2017, price: 30000.65,used: true}
    server.use(http.post('api/car/create', () =>
    HttpResponse.json(fakeCar, {status: 201})
    ))
        expect(await CreateCar(fakeCar)).toStrictEqual(fakeCar);
       console.log(CreateCar(fakeCar))



    });
})