export default function Todo({todo}) {

    const {id, title, completed} = todo;

    return (<div>
            ID = {id};<br/>
            Title = {title};<br/>
            Completed = {completed.toString()};
            <hr/>
        </div>
    );
}