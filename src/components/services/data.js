import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://api.spacexdata.com/v3/launches/"
})

export const getLaunches = () => {
return axiosInstance.get()
}