import {Car} from "../CarType";

type CarItemProps = {
    car: Car
}

export const CarItem = ({car}:CarItemProps) =>{
    function handleDelete() {

    }

    return (
        <>
            <h1>{car.make} {car.model}</h1>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            <label>Used Vehicle: <input disabled type={"checkbox"} defaultChecked={car.used}/></label>
            <button value={car.id} onClick={handleDelete}>Delete</button>
        </>
    )
}
