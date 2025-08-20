// Header & Footer
class CustomHeaderM extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="mobilemenu">
                <div class="closebtn" onclick="closeNav()">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <ul id="mobilenav">
                    <li><i class="fa-solid fa-caret-right"></i> <a href="index.html">Home</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="design.html">Design</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="illustration.html">Illustration</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="about.html">About</a></li>
                    <li><i class="fa-solid fa-caret-right"></i> <a href="#">Contact</a></li>
                </ul>
            </nav>
            <div class="hamburger flex">
                <i class="fa-solid fa-bars" onclick="openNav()"></i>
            </div>
            `
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer-flex" class="flex container">
                    <p>&copy; 2025 Kassidy Lewis / <a href="contact.html" class="link-anim">Contact Me</a></p>
                    <p><i class="fa-solid fa-caret-up"></i> <a href=" " onClick="scrollToTop()" class="link-w">Top</a></p>
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
                    <p>Think I'd be a great fit for your next project? Message me <address><a id="emailLinkID" href="">via email</a></address> or connect with me via <a href="https://www.linkedin.com/in/kassidy-lewis/">LinkedIn</a>!</p>
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
    document.getElementById("mobilemenu").style.width = "250px";
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