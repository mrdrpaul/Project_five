import {render, screen} from "@testing-library/react";
import {describe} from "vitest";
import ProjectFive from "../ProjectFive.tsx";

describe('ProjectFive',()=>{
    it('should display dealership title', async ()=>{
        render(<ProjectFive/>)
        expect(screen.getByRole("heading", {name : "Car Dealership"})).toBeVisible()
    })
})