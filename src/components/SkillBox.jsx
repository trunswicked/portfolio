export default function SkillBox(props) {
    return (
        <div> 
            <div className="p-4 h-15 flex items-center bg-grey/25">
                <img src={props.icon} alt={props.alt} className="h-5"></img>
                <span className="ml-3">{props.tool}</span>
            </div>
            <div className="mb-1 h-2 w-full bg-black">
                <div className={`h-2 ${props.progress} bg-teal`}></div>
            </div>
            <span>Experience: {props.exp}</span>
        </div>
    )
}