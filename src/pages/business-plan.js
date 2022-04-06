import { PageBase } from "./page-base.js";
import { pageData } from "../page-data.js";

export class BusinessPlan extends PageBase {
        constructor(title) {
            super(title);
            this.content = this.getContentString();
        }

        getContentString() {
            return `
                <p style="font-style: italic; text-align: center;">${pageData[1].content.idea}</p>
                <h2 style="text-align: center;">${pageData[1].content.title}</h2>
                <p>${pageData[1].content.summary}</p>

            `;
        }
}