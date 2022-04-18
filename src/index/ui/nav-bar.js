import { pageData } from "../pages/data/page-data.js";

export class NavBar {

    constructor() {
        this.content = this.getContentString();
    }

    renderNavBar(el) {
        if(document.querySelector('header') === null) {
            document.querySelector(el).insertAdjacentHTML('beforeend', this.content);
        }
    }

    getContentString() {
        return `
            <header class="p-3 text-white header">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start my-navbar">
                        <h1 id="header-title">Cointax</h1>
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><div class="nav-link px-2 text-white nav-button" id="home">Hem</div></li>
                            <li><div class="nav-link px-2 text-white nav-button" id="business-plan">${pageData[1].title}</div></li>
                            <li><div class="nav-link px-2 text-white nav-button" id="project-idea">${pageData[2].title}</div></li>
                            <li><div class="nav-link px-2 text-white nav-button" id="contact">${pageData[3].title}</div></li>
                            <li><a href="./app.html" target="_blank" class="nav-link px-2 text-white nav-button" id="app">App</a></li>
                        </ul>
                    </div>
                </div>
            </header>
      `;
    }
}