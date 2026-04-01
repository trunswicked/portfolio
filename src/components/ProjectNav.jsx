export default function ProjectNav(props) {
    return (
        <nav className="py-12 border-t-3 border-grey/25" aria-labelledby="project-navigation">
            <div className="flex justify-between">
                <div>
                    <a href={props.link_left}>
                        <div className="w-30 md:w-50 rounded bg-grey/25">
                            <img src={props.src_left} alt={props.alt_left} className="h-20 md:h-30 object-cover rounded mb-2 hover:opacity-75 transition-opacity"></img>
                        </div>
                    </a>
                    <a href={props.link_left} className="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">
                        <i className="fa-solid fa-angles-left mr-1 text-xs"></i>{props.name_left}
                    </a>
                </div>
                <div className="text-right">
                    <a href={props.link_right}>
                        <div className="ml-auto w-30 md:w-50 rounded bg-grey/25">
                            <img src={props.src_right} alt={props.alt_right} className="h-20 md:h-30 object-cover rounded mb-2 hover:opacity-75 transition-opacity"></img>
                        </div>
                    </a>
                    <a href={props.link_right} className="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">
                        {props.name_right}<i className="fa-solid fa-angles-right ml-1 text-xs"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}