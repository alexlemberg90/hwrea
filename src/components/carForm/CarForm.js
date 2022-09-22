import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carValidator} from "../../validators";
import {carServices} from "../../services";
import css from "./form.module.css"
import {useEffect} from "react";


export default function CarForm({setCars, updateCar, setCar}) {

    const {register, handleSubmit, reset, formState: {isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: `all`
    })


    const create = async (car) => {
                const {data} = await carServices.createCar(car)
                setCars(cars => [...cars, data])
                reset()
    };
    const update = async (car) => {
        await carServices.updateById(updateCar.id, car)
        reset()
        setCar(null)
    }


    useEffect(() => {
        updateCar && setValue('model', updateCar.model)
        updateCar && setValue('price', updateCar.price)
        updateCar && setValue('year', updateCar.year)
    }, [updateCar])


    return (<div className={css.Form}>
            <form onSubmit={handleSubmit(updateCar && updateCar.id ? update : create)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                {
                    updateCar && <button disabled={!isValid}>Update</button>
                }
                {
                    !updateCar && <button disabled={!isValid}>Save</button>
                }

            </form>

        </div>
    );
}