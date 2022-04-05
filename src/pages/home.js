import { PageBase } from "./page-base.js";

export class Home {

    constructor(title, content) {
        this.title = title;
        this.content = content;
        document.querySelector('.title').innerText = this.title;
    }

/*     getElementString() {
        return `
        <header>
            <h1>
                ${this.title}
            </h1>
        </header>
        <main>
            <div>
                ${this.content}
            </div>
        </main>
        <footer></footer>
        `;
    }

    appendToElement(el) {
        let htmlString = this.getElementString();
        document.querySelector(el).insertAdjacentHTML('beforeend', htmlString);
    } */

    setContent(content) {
        this.content = content;
    }

    setTitle() {
        document.querySelector('.title').innerText = this.title;
    }

    appendToElement(el) {
        document.querySelector(el).innerText = this.content;
    }
}