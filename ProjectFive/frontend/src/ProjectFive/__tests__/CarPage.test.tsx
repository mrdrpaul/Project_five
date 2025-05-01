import {render, screen} from "@testing-library/react";
import {describe, it, expect, vi} from "vitest";
import CarPage from "../CarPage";
import {Car} from "../../CarType";
import * as CarService from "../CarService"

describe('Car Page', () => {

    it('should display a fetched car', async () => {
        const expectedCar: Car[] = [
            {id: 1, make: "Ford", model: "Mustang", year: 2017, price: 2043.33, used: true},
        ]

        const mockFetchCar = vi.spyOn(CarService, "fetchCars")
            .mockResolvedValue(expectedCar);

        render(<CarPage/>)

        const carList = await screen.findByRole("heading", {name: "Ford Mustang"})
        expect(carList).toBeVisible();

        expect(mockFetchCar).toHaveBeenCalledOnce();
        screen.logTestingPlaygroundURL();
    })

    it('Should display a Make, Model, year, price, isUsed Input Boxes', async() => {
        render(<CarPage/>)
       const makeInputBox =   await screen.findByPlaceholderText("Make");
        const modelInputBox = await screen.findByPlaceholderText("Model")
        const priceInputBox =   await screen.findByLabelText("Price:")
        const yearInputBox = await screen.findByPlaceholderText("Year")
        const isUsed = await screen.findByLabelText("isUsed:")
        const submitButton = await screen.findByRole("button")
        expect(makeInputBox).toBeVisible()
        expect(modelInputBox).toBeVisible()
        expect(priceInputBox).toBeVisible()
        expect(yearInputBox).toBeVisible()
        expect(isUsed).toBeVisible()
        expect(submitButton).toBeVisible()

    });
    it('should delete Car off List', async () => {
        const expectedCar: Car[] = [
            {id: 1, make: "Ford", model: "Mustang", year: 2017, price: 2043.33, used: true},
            {id: 2, make: "Toyota", model: "Corolla", year: 2014, price: 204.33, used: false},
        ]
        const mockFetchCars = vi.spyOn(CarService, "fetchCars")
            .mockResolvedValue(expectedCar);

        render(<CarPage/>)

        const carList = await screen.findByRole("heading", {name: "Ford Mustang"})

        screen.logTestingPlaygroundURL();


    });
})