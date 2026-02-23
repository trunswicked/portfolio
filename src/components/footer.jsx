export default function CustomFooter() {
    return (
        <>
            <h2 className="font-display text-4xl">Get in Touch!</h2>
            <p className="py-4">Think I'd be a great fit for your next project? Message me via email or connect with me via LinkedIn!</p>
            <div className="flex justify-between font-semibold">
                <span>&#0169; 2026 Kassidy Lewis</span>
                <a href="#top" className="hover:text-teal hover:underline decoration-2 underline-offset-3 transition duration-300">
                    Back to Top<i className="fa-solid fa-angles-up ml-1 text-xs"></i>
                </a>
            </div>
        </>
    )
}