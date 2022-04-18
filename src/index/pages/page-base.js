import { Footer } from "../ui/footer.js";
import { NavBar } from "../ui/nav-bar.js";

export class PageBase {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }

    renderPage(){
        let navBar = new NavBar(); 
        navBar.renderNavBar('body');

        let main = document.querySelector('main');
        if(main === null) {
            let body = document.querySelector('body');
            main = document.createElement('main');
            body.append(main);
        }

        let titleH1 = document.createElement('h1');
        titleH1.id = 'page-title';
        titleH1.innerText = this.title;
        
        let contentDiv = document.createElement('div');
        contentDiv.id = 'page-content';
        contentDiv.insertAdjacentHTML('beforeend', this.content);
        
        while (main.firstChild) {
            main.firstChild.remove();
        }
        main.append(titleH1, contentDiv);

        let footer = new Footer();
        footer.renderFooter('body');
    }

    renderPageByClick(buttonId) {
        const button = document.querySelector(buttonId);
        button.addEventListener('click', this.renderPage.bind(this));
    }

    getContentString() {
        return `Override this string in each page`;
    }
}