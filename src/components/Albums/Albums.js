import {useEffect, useState} from "react";

import {plaseHolderServices} from "../../services";
import Album from "./Album";


export default function Albums() {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        plaseHolderServices.getAlbums().then(({data}) => setAlbums(data))
    }, [])

    return (<div>
            <h1>Albums</h1>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
}