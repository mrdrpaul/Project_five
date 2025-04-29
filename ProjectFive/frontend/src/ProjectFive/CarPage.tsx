import {useEffect, useState} from "react";
import {CarItem} from "./CarItem";
import {fetchCars} from "./CarService";
import {Car} from "../CarType";

const CarPage = () => {
    const [carList, setCarList] = useState<Car[]>([])


    useEffect(() => {
        fetchCars().then((r)=>{
            setCarList(r)})
    }, []);

    return (
        <div>
            {carList.map((el, index)=>(<CarItem car={el} key={index}/>))}
        </div>
    );
};

export default CarPage;