export default function NavDefault() {
    return (
        <ul className="flex text-white">
            <li className="grow pr-6">
                <a href="/index.html" className="hover:text-teal transition duration-300">
                    <i class="fa-regular fa-house"></i>
                </a>
            </li>
            <li className="px-6">
                <a href="/pages/projects.html" className="font-semibold transition duration-300 hover:text-teal hover:underline decoration-2 underline-offset-3">
                    Projects
                </a>
            </li>
            <li className="pl-6 border-l-3 border-grey">
                <a href="/pages/about.html" className="font-semibold transition duration-300 hover:text-teal hover:underline decoration-2 underline-offset-3">
                    About
                </a>
            </li>
        </ul>
    )
}