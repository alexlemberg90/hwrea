import {useEffect, useState} from "react";
import {getLaunches} from "../services/data";
import Launch from "../launch/Launch";


export default function Launches () {
    let [launches, setLaunches] = useState([]);

    useEffect(() =>{
        getLaunches().then(value => setLaunches(value.data))
},[]);
   let filterLaunches = launches.filter(value =>+value.launch_year !== 2020);

    return (<div>
            {filterLaunches.map((value,index) => (<Launch key={index} launch={value}/>))}
        </div>
    );
}