export default function Footer() {
    return (
        <>
            <h2 className="font-display text-4xl">Get in Touch!</h2>
            <p className="pt-2 pb-4">Think I'd be a great fit for your next project? Message me via email or connect with me via LinkedIn!</p>
            <div className="flex justify-between font-semibold">
                <span>© 2026 Kassidy Lewis</span>
                <a href="#top" className="transition duration-300 hover:text-teal hover:underline decoration-2 underline-offset-3">Back to Top<i className="fa-solid fa-angles-up text-xs ml-1"></i></a>
            </div>
        </>
    )
}