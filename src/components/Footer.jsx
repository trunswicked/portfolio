export default function Footer() {
    return (
        <footer class="py-12 px-6 md:px-24 lg:px-48 xl:px-96 text-white bg-black">
            <div class="p-6 rounded bg-grey/10 border-2 border-grey/25">
                <h2 className="font-display text-4xl">Get in Touch!</h2>
                <p className="py-4">Think I'd be a great fit for your next project? <a href="mailto:trunswickedart@gmail.com" className="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">Contact me by email</a> or <a href="https://www.linkedin.com/in/kassidy-lewis/" className="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">connect with me on LinkedIn</a>!</p>
            </div>
            <div className="pt-2 flex justify-between">
                <span>&#0169; 2026 Kassidy Lewis</span>
                <a href="#top" className="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition duration-300">
                    Back to Top<i className="fa-solid fa-angles-up ml-1 text-xs"></i>
                </a>
            </div>
        </footer>
    )
}