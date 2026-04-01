export default function ProjectItem(props) {
    return (
        <div className="relative overflow-hidden group">
            <div className="aspect-video rounded bg-grey/25">
                <a href={props.url}>
                    <img 
                        src={props.src}
                        alt={props.alt}
                        className="aspect-video object-cover rounded-t"
                    />
                </a>
            </div>
            <div className="p-6 absolute top-full right-0 left-0 h-full rounded-t text-white bg-black/90 group-hover:top-0 transition-all ease-in-out duration-300">
                <div className="absolute bottom-0 mb-6">
                    <a href={props.url}>
                        <h4 className="font-display text-2xl text-teal hover:underline underline-offset-4">
                            {props.title}<i className="fa-solid fa-angles-right ml-1 text-base"></i>
                        </h4>
                    </a>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}