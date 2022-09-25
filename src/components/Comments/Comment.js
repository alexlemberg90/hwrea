import {Link} from "react-router-dom";

export default function Comment({coment}) {
    const {postId, id, name, email, body} = coment;

    return (<div>
            <h5>ID :</h5>  {id}<br/>
            <h5>Title :</h5> {name}<br/>
            <h5>User Email :</h5> {email}<br/>
            <h5>Comment :</h5> {body}
            <Link to={`posts/${postId}`}>Comment posts</Link>
            <hr/>
        </div>
    );
}