export default function ProjectItem(props) {
    return (
        <div className="relative overflow-hidden h-50 group">
            <img 
                src={props.src}
                alt={props.alt}
                className="h-full w-full object-cover"
            />
            <div className="absolute p-6 h-50 top-full right-0 left-0 bg-black/90 text-white group-hover:top-0 group-focus:top-0 transition-all">
                <div className="absolute bottom-0 mb-6">
                    <a href={props.url}>
                        <h4 className="font-display text-2xl text-teal hover:underline underline-offset-4">
                            {props.title}<i className="fa-solid fa-angles-right text-base ml-1"></i>
                        </h4>
                    </a>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}