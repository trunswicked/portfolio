export default function Footer() {
    return (
        <>
            <h2 id="contact" className="font-display text-4xl">Get in Touch!</h2>
            <p className="py-4">Think I'd be a great fit for your next project? <a href="mailto:trunswickedart@gmail.com" class="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">Contact me by email</a> or <a href="https://www.linkedin.com/in/kassidy-lewis/" class="font-semibold hover:text-teal hover:underline decoration-2 underline-offset-3 transition-all duration-300">connect with me on LinkedIn</a>!</p>
            <div className="flex justify-between font-semibold">
                <span>&#0169; 2026 Kassidy Lewis</span>
                <a href="#top" className="hover:text-teal hover:underline decoration-2 underline-offset-3 transition duration-300">
                    Back to Top<i className="fa-solid fa-angles-up ml-1 text-xs"></i>
                </a>
            </div>
        </>
    )
}