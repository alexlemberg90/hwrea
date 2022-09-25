export default function Comment({comment}) {
    let {postId, name, email, body} = comment;

    return (<div>
            Post ID - {postId}<br/>
            Name - {name}<br/>
            Email - {email}<br/>
            Comment - {body}
            <hr/>
        </div>
    );
}