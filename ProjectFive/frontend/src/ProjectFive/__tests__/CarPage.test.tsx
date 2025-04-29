import {render, screen} from "@testing-library/react";
import {describe, it, expect, vi} from "vitest";
import CarPage from "../CarPage";
import {Car} from "../../CarType";
import * as CarService from "../CarService"

describe('Car Page', () => {

    it('should display a fetched car', async () => {
        const expectedCar: Car[] = [
            {id: 1, make: "Ford", model: "Mustang", year: 2017, price: 2043.33, isUsed: true},
        ]

        const mockFetchCar = vi.spyOn(CarService, "fetchCars")
            .mockResolvedValue(expectedCar);

        render(<CarPage/>)

        const carList = await screen.findByRole("heading", {name: "Ford Mustang"})
        expect(carList).toBeVisible();

        expect(mockFetchCar).toHaveBeenCalledOnce();
    });
})