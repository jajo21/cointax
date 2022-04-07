import { PageBase } from "./page-base.js";
import { pageData } from "./data/page-data.js";

export class ProjectIdea extends PageBase {
        constructor(title) {
            super(title);
            this.content = this.getContentString();
        }

        getContentString() {
            return `
                <p>${pageData[2].content}</p>
            `;
        }
}