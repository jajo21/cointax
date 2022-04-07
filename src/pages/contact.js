import { PageBase } from "./page-base.js";
import { pageData } from "./data/page-data.js";

export class Contact extends PageBase {
        constructor(title) {
            super(title);

            this.content = this.getContentString();
        }

        getContentString() {
            return `
            <div class="contact-div">
                <h2>${pageData[3].content.title}</h2>
                <p>${pageData[3].content.contactContent}</p>
            </div>
            <div class="contact-icons"> 
                <a href="mailto:${pageData[3].content.email}" target="_blank">
                    <i class="fas fa-at my-icon" aria-hidden="true"></i>
                </a>
                <a href="${pageData[3].content.github}" target="_blank">
                    <i class="fab fa-github my-icon"></i>
                </a>
                <a href="${pageData[3].content.linkedin}" target="_blank">
                    <i class="fab fa-linkedin-in my-icon" aria-hidden="true"></i>
                </a>
                <a href="${pageData[3].content.instagram}" target="_blank">
                    <i class="fab fa-instagram my-icon" aria-hidden="true"></i>
                </a>
                <a href="${pageData[3].content.facebook}" target="_blank">
                    <i class="fab fa-facebook my-icon" aria-hidden="true"></i>
                </a>
            </div>
            `;
        }
}