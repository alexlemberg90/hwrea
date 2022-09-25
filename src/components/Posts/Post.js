import {Link} from "react-router-dom";

export default function Post({post}) {
    const {id, title, body} = post;

    return (<div>
            <h5>ID :</h5>  {id}<br/>
            <h5>Title :</h5> {title}<br/>
            <h5>Post :</h5> {body}<br/>
        <h4><Link to={`comments/${id}`}>post comments</Link></h4>
            <hr/>
        </div>
    );
}