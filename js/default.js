// Header & Footer
class CustomHeaderM extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="hamburger flex">
                <i class="fa-solid fa-bars l-grey" onclick="openNav()" role="button"></i>
            </div>
            <nav id="mobilemenu">
                <div class="closebtn">
                    <i class="fa-solid fa-xmark l-mobile-nav" onclick="closeNav()" role="button"></i>
                </div>
                <ul>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="index.html" class="l-mobile-nav">Home</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="design.html" class="l-mobile-nav">Design</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="illustration.html" class="l-mobile-nav">Illustration</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="about.html" class="l-mobile-nav">About</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="#" class="l-mobile-nav">Contact</a></li>
                </ul>
            </nav>
            `
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="flex j-between">
                    <div>&copy; 2025 Kassidy Lewis / <a href="contact.html" class="link-anim">Contact Me</a></div>
                    <div><a href="#top" onClick="scrollToTop()" class="l-mobile-nav" role="button">Top</a> <i class="fa-solid fa-caret-up"></i></div>
                </div>
            </footer>
            `
    }
}

class GetinTouch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="getintouch">
                <div class="container">
                    <h1>Get in Touch!</h1>
                    <p class="getintouch-text">Think I'd be a great fit for your next project? Message me <address><a id="emailLinkID" href=" " class="l-grey">via email</a></address> or connect with me via <a href="https://www.linkedin.com/in/kassidy-lewis/" class="l-grey">LinkedIn</a>!</p>
                </div>
            </section>
            `
    }
}

customElements.define('custom-header-m', CustomHeaderM)
customElements.define('get-in-touch', GetinTouch)
customElements.define('custom-footer', CustomFooter)

// Mobile Navigation
function openNav() {
    document.getElementById("mobilemenu").style.width = "30vmax";
}

function closeNav() {
    document.getElementById("mobilemenu").style.width = "0";
}

// Email
const emailForm = document.getElementById("emailLinkID");
emailForm?.setAttribute("href", "mailto:".concat(window.atob(window.btoa("trunswickedart@gmail.com"))));

// Scroll To Top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}