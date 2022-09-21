import {useEffect, useState} from "react";

import {carServices} from "../../services";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";
import css from "./cars.module.css"


export default function Cars() {
    let [cars, setCars] = useState([]);
    let [car, setCar] = useState(null)

    useEffect(() => {
        carServices.getCars().then(({data}) => setCars(data))

    }, [cars])


    return (
        <div>
        <div className={css.Center}>
            <CarForm setCars={setCars} updateCar={car} cars={cars}/>
        </div>
            {
                cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCar={setCar}/>)
            }
        </div>
    );
}