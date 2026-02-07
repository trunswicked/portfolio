import { createRoot } from 'react-dom/client'
import NavDefault from './components/navigation.jsx'
import Footer from './components/footer.jsx'
import ProjectItem from './components/project-item.jsx'

const navNode = document.getElementById('main-navigation')
const navRoot = createRoot(navNode)
navRoot.render(<NavDefault />)

const footNode = document.getElementById('custom-footer')
const footRoot = createRoot(footNode)
footRoot.render(<Footer />)

const itemNode = document.getElementById('the-work')
const itemRoot = createRoot(itemNode)
itemRoot.render(
    <>
        <h3 className="pt-2 font-display text-2xl">Graphic Design, Web Development</h3>
        <em>Hover or tap to view project details</em>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <ProjectItem
                src="/assets/images/design/portfolio_home.png"
                alt="Mobile and desktop versions of a portfolio website shown side-by-side"
                url="/pages/portfolio-site.html"
                title="Portfolio Site"
                desc="2025 to 2026, Web Development"
            />
            <ProjectItem
                src="/assets/images/design/mockup_desktop.png"
                alt="Webpage mockup shown on two desktop monitors"
                url="/pages/page-mockup.html"
                title="Page Mockup"
                desc="2024, Web Development"
            />
            <ProjectItem
                src="/assets/images/design/alesco_overview.png"
                alt="Logo designs for Alesco Design Solutions"
                url="/pages/logo-work.html"
                title="Logo Work"
                desc="2024 to present, Graphic Design"
            />
            <ProjectItem
                src="/assets/images/design/socmed_comms.png"
                alt="Two social media graphics titled: Commission Prices"
                url="/pages/social-media-graphics.html"
                title="Social Media Graphics"
                desc="2018 to present, Graphic Design"
            />
            <ProjectItem
                src="/assets/images/design/map_overview.png"
                alt="Screenshot of an interactive fantasy map"
                url="/pages/interactive-map.html"
                title="Interactive Map"
                desc="2024, Web Development"
            />
            <ProjectItem
                src="/assets/images/design/clock_entrance.png"
                alt="Screenshot of a building entrance in a 3D environment"
                url="/pages/clock-exhibit.html"
                title="Clock Exhibit"
                desc="2024, Multimedia"
            />
        </div>
        <h3 className="pt-2 font-display text-2xl">Illustration, Animation</h3>
        <em>Hover or tap to view project details</em>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <ProjectItem
                src="/assets/images/illustration/commission_3.png"
                alt="A winged character with long violet hair kneeling against an orange background"
                url="/pages/commission-work.html"
                title="Commission Work"
                desc="2018 to present, character artwork"
            />
            <ProjectItem
                src="/assets/images/illustration/personal_33.png"
                alt="Close-up of two anthropormorphic characters smiling"
                url="/pages/personal-art.html"
                title="Personal Artwork"
                desc="2018 to present, fan art and sketches"
            />
            <ProjectItem
                src="/assets/images/illustration/animation_still.png"
                alt="Video still with the caption: How To Comic Page"
                url="/pages/animation.html"
                title="Animation"
                desc="2018 to present, Motion Graphics"
            />
        </div>
    </>
)