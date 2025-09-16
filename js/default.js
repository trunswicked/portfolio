// Header & Footer
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="menu" class="bg-dark">
                <ul class="flex j-between">
                    <li style="margin-right: auto;"><a href="index.html" class="l-nav">Home</a></li>
                    <li><a href="design.html" class="l-menu link-anim">Design</a></li>
                    <li><a href="illustration.html" class="l-menu link-anim">Illustration</a></li>
                    <li><a href="about.html" class="l-menu link-anim">About</a></li>
                </ul>
            </nav>
            `
    }
}

class CustomHeaderM extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="hamburger flex">
                <button class="l-grey" onClick="openNav()"><i class="fa-solid fa-bars"></i></button>
            </div>
            <nav id="mobilemenu" class="bg-dark">
                <div class="mobile-content flex flex-column">
                    <div class="closebtn">
                        <button class="l-nav" onClick="closeNav()"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <ul>
                        <li class="mt-0"><i class="fa-solid fa-caret-right"></i> <a href="index.html" class="l-nav">Home</a></li>
                        <li><i class="fa-solid fa-caret-right"></i> <a href="design.html" class="l-nav">Design</a></li>
                        <li><i class="fa-solid fa-caret-right"></i> <a href="illustration.html" class="l-nav">Illustration</a></li>
                        <li><i class="fa-solid fa-caret-right"></i> <a href="about.html" class="l-nav">About</a></li>
                    </ul>
                    <div class="socmed">
                        <a class="l-nav" href="https://www.linkedin.com/in/kassidy-lewis/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </nav>
            `
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-dark">
                <div class="flex j-between">
                    <div>&copy; 2025 Kassidy Lewis / <a href="https://www.linkedin.com/in/kassidy-lewis/" class="link-anim">LinkedIn</a></div>
                    <div><button href="#top" onClick="scrollToTop()" class="l-nav" style="border-bottom: 1px solid">Top</button> <i class="fa-solid fa-caret-up"></i></div>
                </div>
            </footer>
            `
    }
}

class GetinTouch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="getintouch" class="bg-white">
                <div class="container">
                    <h1>Get in Touch!</h1>
                    <p class="getintouch-text">Think I'd be a great fit for your next project? Message me <address><a id="emailLinkID" href=" ">via email</a></address> or connect with me via <a href="https://www.linkedin.com/in/kassidy-lewis/">LinkedIn</a>!</p>
                </div>
            </section>
            `
    }
}

customElements.define('custom-header', CustomHeader)
customElements.define('custom-header-m', CustomHeaderM)
customElements.define('get-in-touch', GetinTouch)
customElements.define('custom-footer', CustomFooter)

// Mobile Navigation
function openNav() {
    document.getElementById("mobilemenu").style.width = "200px";
}

function closeNav() {
    document.getElementById("mobilemenu").style.width = "0";
}

// Lightbox
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll(".img-expand")
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e=> {
    lightbox.classList.remove('active')
})

// Email
const emailForm = document.getElementById("emailLinkID");
emailForm?.setAttribute("href", "mailto:".concat(window.atob(window.btoa("trunswickedart@gmail.com"))));

// Scroll To Top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}