import {useEffect, useState} from "react";

import {plaseHolderServices} from "../../services";
import Todo from "./Todo";


export default function Todos() {
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        plaseHolderServices.getTodos().then(({data}) => setTodos(data));
    }, [])


    return (<div>
            <h1>Todos</h1>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
}