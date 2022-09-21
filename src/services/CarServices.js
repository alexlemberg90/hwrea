import {axiosInstance} from "./Axios";
import {carsUrl} from "../configs";

const carServices = {
    getCars: () => axiosInstance.get(carsUrl),
    createCar: (car) => axiosInstance.post(carsUrl, car),
    getById: (id) => axiosInstance.get(`${carsUrl}/${id}`),
    updateById: (id,car) => axiosInstance.put(`${carsUrl}/${id}`, car),
    deleteById: (id) => axiosInstance.delete(`${carsUrl}/${id}`)
}

export {
    carServices
}