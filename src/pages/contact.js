import { PageBase } from "./page-base.js";
import { pageData } from "../page-data.js";

export class Contact extends PageBase {
        constructor(title) {
            super(title);

            this.content = this.getContentString();
        }

        getContentString() {
            return `
            <h2 style="text-align: center;">${pageData[3].content.title}</h2>
            `;
        }
}