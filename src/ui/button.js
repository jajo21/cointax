export class Button {

    constructor(title) {
        this.title = title;
        this.el = document.createElement("button");
        this.el.innerHTML = this.title;
    }

    appendToElement(elem) {
        document.querySelector(elem).appendChild(this.el);
    }

    onClick(func) {
        this.el.onclick = func;
    }
}