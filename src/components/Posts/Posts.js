import {useEffect, useState} from "react";

import {plaseHolderServices} from "../../services";
import Post from "./Post";
import {Outlet} from "react-router-dom";


export default function Posts() {
    let [posts, setComments] = useState([]);

    useEffect(() => {
        plaseHolderServices.getPosts().then(({data}) => {
            setComments(data)
        });

    }, []);

    return (<div>
            <Outlet/>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}