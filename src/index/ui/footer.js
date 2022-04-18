export class Footer {

    constructor() {
        this.content = this.getContentString();
    }

    renderFooter(el) {
        if(document.querySelector('footer') === null) {
            document.querySelector(el).insertAdjacentHTML('beforeend', this.content);
        }
    }

    getContentString() {
        return `
            <footer>
                <div>
                    &copy; 2022 - Cointax by Jakobsson
                </div>
            </footer>
      `;
    }
}