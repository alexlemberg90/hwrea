import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {plaseHolderServices} from "../../services";


export default function PostDetails() {
    let [post, setPost] = useState(null)
    let {id} = useParams()
    console.log(post && post)
    useEffect(() => {
        plaseHolderServices.getCommentsPosts(id).then(({data}) => {
            setPost(data)
        })
    }, [id])

    return (<div>
           Body - {post && post.body}
        </div>
    );
}