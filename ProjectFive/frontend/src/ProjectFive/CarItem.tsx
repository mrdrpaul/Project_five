import {Car} from "../CarType";

type CarItemProps = {
    car: Car
}

export const CarItem = ({car}:CarItemProps) =>{
    return (
        <>
            <h1>{car.make} {car.model}</h1>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            <label>Used Vehicle: <input type={"checkbox"} defaultChecked={car.isUsed}/></label>
        </>
    )
}
