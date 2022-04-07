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
                <br>
                <h3 style="text-align: center;">${pageData[1].content.summaryTitle}</h3>
                <p>${pageData[1].content.summaryContent}</p>
                <h3 style="text-align: center;">${pageData[1].content.backgroundTitle}</h3>
                <p>${pageData[1].content.backgroundContent1}
                    <a href="${pageData[1].content.backgroundImage}" target="_blank">
                    <img id="bp-img" src="${pageData[1].content.backgroundImage}" alt="bild på excel-dokument">
                    </a> <br><br>
                    ${pageData[1].content.backgroundContent2}
                </p>
                <h3 style="text-align: center;">${pageData[1].content.purposeTitle}</h3>
                <p>${pageData[1].content.purposeContent}</p>

            `;
        }
}