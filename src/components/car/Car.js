import css from './car.module.css'
import {carServices} from "../../services";

export default function Car({car, setCars, setCar}) {
    const {id, year, model, price} = car


    async function deleteCar() {
        await carServices.deleteById(id)
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1)
            return [...cars]
        })
    }

    async function updateCar() {
        await setCar(car)

    }

    return (<div className={css.Car}>
            <div>
                <div>ID: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={updateCar}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
}