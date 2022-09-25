export default function Album({album}) {
    const {id, title} = album;

    return (<div>
            ID = {id};<br/>
            Title = {title};<br/>
            <hr/>
        </div>
    );
}