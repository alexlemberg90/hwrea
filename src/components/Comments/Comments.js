import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {plaseHolderServices} from "../../services";
import Comment from "./Comment";


export default function Comments() {
    let [comments, setComments] = useState([])
    let {id} = useParams()

    useEffect(() => {
        plaseHolderServices.getPostsComments(id).then(({data}) => {
            setComments(data)
        })
    }, [id])

    return (<div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}