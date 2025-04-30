import {FormEvent, useEffect, useState} from "react";
import {CarItem} from "./CarItem";
import {CreateCar, fetchCars} from "./CarService";
import {Car} from "../CarType";

const CarPage = () => {
    const [carList, setCarList] = useState<Car[]>([])



    useEffect(() => {
        fetchCars().then((r)=>{
            setCarList(r)})
    }, []);


    const initialCar:Car = {
        id:null,
        make: "",
        model:"",
        year:0,
        price:0,
        used: false
    }

    const [newCar, setNewCar] = useState(initialCar)
    const [checked, setChecked] = useState(false)



const submitHandler = (event: FormEvent) => {
        event.preventDefault()
    const userCar: Car = newCar
    CreateCar(userCar).catch()
    console.log(userCar)
    setNewCar(initialCar)

}

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        setNewCar({ ...newCar, used: isChecked });
    }




    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Make:
                        <input name="make" value={newCar.make} onChange={(event) => setNewCar({...newCar, make:event.target.value})} placeholder="Make"/>
                    </label>
                    <label>Model:
                        <input name="model" value={newCar.model} onChange={(event) => setNewCar({...newCar, model:event.target.value})} placeholder="Model"/>
                    </label>
                    <label> Price:
                        <input name="price" value={newCar.price} onChange={(event) => setNewCar({...newCar, price:parseInt(event.target.value)})} type="number"/>
                    </label>
                    <label>Year:
                        <input name="year" value={newCar.year} onChange={(event) => setNewCar({...newCar, year:parseInt(event.target.value)})} type="number" placeholder="Year"/>
                    </label>
                    <input
                        name="used"
                        type="checkbox"

                        onChange={handleClick}
                        checked={checked}
                    />

                    <button >Submit</button>
                </form>
            </div>
            {carList.map((el, index)=>(<CarItem car={el} key={index}/>))}
        </div>
    );
};


export default CarPage;