import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


function App() {
    return (
        <div>
            <ul>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/posts'}>Posts </Link></li>
            </ul>
            <Routes>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/posts'} element={<Posts/>}>
                    <Route path={'comments/:id'} element={<Comments/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
