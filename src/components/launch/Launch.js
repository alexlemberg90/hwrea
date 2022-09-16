
export default function Launch (props) {
    let {launch} = props;
    console.log(launch)
    return (<div>
            {launch.mission_name} <br/>
            {launch.launch_year}
<img src={launch.links.mission_patch_small}/>
            <hr/>
        </div>
    );
}
