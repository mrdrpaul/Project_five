import {render, screen} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import ProjectFive from "../ProjectFive.tsx";

describe('ProjectFive',()=>{
    it('should display dealership title', async ()=>{
        render(<ProjectFive/>)
        expect(screen.getByRole("heading", {name : "Lagoon's Lemons"})).toBeVisible()
    })
})