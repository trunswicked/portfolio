export default function SubNavigation(props) {
    return (
        <nav className="my-12 p-6 text-center bg-black text-white" aria-labelledby="sub-navigation">
            <em>Jump to:</em>
            <ul className="pt-2 flex justify-center divide-x-3 divide-grey font-semibold transition-all">
                <li>
                    <a href={props.link_1} className="pr-4 font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">
                        {props.label_1}
                    </a>
                </li>
                <li>
                    <a href={props.link_2} className="px-4 font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">
                        {props.label_2}
                    </a>
                </li>
                <li>
                    <a href={props.link_3} className="pl-4 font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">
                        {props.label_3}
                    </a>
                </li>
            </ul>
        </nav>
    )
}