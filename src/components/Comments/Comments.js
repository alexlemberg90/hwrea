import {useEffect, useState} from "react";

import {plaseHolderServices} from "../../services";
import Comment from "./Comment";
import {Outlet} from "react-router-dom";


export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        plaseHolderServices.getComments().then(({data}) => {
            setComments(data)
        });

    }, []);

    return (<div>
            <Outlet/>
            <h1>Comments</h1>
            {comments.map(comment => <Comment key={comment.id} coment={comment}/>)}
        </div>
    );
}