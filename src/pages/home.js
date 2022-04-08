import { PageBase } from "./page-base.js";
import { pageData } from "./data/page-data.js";

export class Home extends PageBase {
    constructor(title) {
        super(title);
        this.content = this.getContentString();
    }

    getContentString() {
        return `
        <br>
        <p>${pageData[0].content}</p>
        `;
    }
}