export default function Navigation() {
    return (
        <ul className="flex font-semibold text-white transition-all">
            <li className="grow">
                <a href="/portfolio/" className="hover:text-teal duration-300">
                    <i className="fa-regular fa-house"></i>
                </a>
            </li>
            <li className="px-6">
                <a href="/portfolio/projects/" className="hover:text-teal hover:underline decoration-2 underline-offset-3 duration-300">
                    Projects
                </a>
            </li>
            <li className="pl-6 border-l-3 border-grey">
                <a href="/portfolio/about/" className="hover:text-teal hover:underline decoration-2 underline-offset-3 duration-300">
                    About
                </a>
            </li>
        </ul>
    )
}