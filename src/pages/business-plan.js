import { PageBase } from "./page-base.js";
import { pageData } from "./data/page-data.js";

export class BusinessPlan extends PageBase {
    constructor(title) {
        super(title);
        this.content = this.getContentString();
    }

    getContentString() {
        return `
            <div class="business-plan-div">
                <p id="business-plan-idea">${pageData[1].content.idea}</p>
                <h2>${pageData[1].content.summaryTitle}</h2>
                <p>${pageData[1].content.summaryContent}</p>
                <h2>${pageData[1].content.backgroundTitle}</h2>
                <p>${pageData[1].content.backgroundContent1}
                    <a href="${pageData[1].content.backgroundImage}" target="_blank">
                    <img id="bp-img" src="${pageData[1].content.backgroundImage}" alt="bild på excel-dokument">
                    </a> <br><br>
                    ${pageData[1].content.backgroundContent2}
                </p>
                <h2>${pageData[1].content.purposeTitle}</h2>
                <p>${pageData[1].content.purposeContent}</p>
            </div>
        `;
    }
}