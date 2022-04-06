export class PageBase {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }

    renderPage(){
        let titleH1 = document.createElement('h1');
        titleH1.id = 'page-title';
        titleH1.innerText = this.title;
        
        let contentDiv = document.createElement('div');
        contentDiv.id = 'page-content';
        contentDiv.innerHTML = this.content;
        
        const main = document.querySelector('main');
        while (main.firstChild) {
            main.firstChild.remove();
        }
        main.append(titleH1, contentDiv);
    }

    renderPageByClick(buttonId) {
        const button = document.querySelector(buttonId);
        button.addEventListener('click', this.renderPage.bind(this));
    }

    getContentString() {
        return `Override this string in each page`;
    }
}