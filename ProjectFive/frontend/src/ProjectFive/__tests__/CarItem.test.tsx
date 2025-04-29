import {render, screen} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import {CarItem} from "../CarItem";
import {Car} from "../../CarType";

describe('Car Item',()=>{
    it('should display car make', () => {
        const testCar:Car = {
            id:null,
            make:"Ford",
            model:"Mustang",
            year:2017,
            price:20000.95,
            isUsed:true
        }

        render(<CarItem car={testCar}/>)

        const makeModelText = screen.getByRole("heading", {name: testCar.make + " " + testCar.model});
        const yearText = screen.getByText("Year: " + testCar.year)
        const priceText = screen.getByText("Price: $" + testCar.price)
        const isUsedDisplay = screen.getByLabelText("Used Vehicle:")

        expect(makeModelText).toBeVisible()
        expect(yearText).toBeVisible()
        expect(priceText).toBeVisible()
        expect(isUsedDisplay).toBeVisible()
        expect(isUsedDisplay).toBeChecked()
    });
})