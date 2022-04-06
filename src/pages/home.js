import { PageBase } from "./page-base.js";
import { pageData } from "../page-data.js";

export class Home extends PageBase {
        constructor(title) {
            super(title);

            this.content = this.getContentString();
        }

        getContentString() {
            return `
            <p>${pageData[0].content}</p>
            `;
        }
}