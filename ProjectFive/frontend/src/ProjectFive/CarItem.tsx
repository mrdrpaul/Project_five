import {useState} from "react";
import {Car} from "../CarType.ts"

export const CarItem = () =>{
    const car = "ford"
    const [cars, setCars] = useState<Car>()
    return (
        <div>{car}</div>
    )
}
