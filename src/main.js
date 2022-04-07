import { Home } from "./pages/home.js";
import { BusinessPlan } from "./pages/business-plan.js";
import { ProjectIdea } from "./pages/project-idea.js";
import { Contact } from "./pages/contact.js";
import { pageData } from "./pages/data/page-data.js";

class Main {
    constructor() {
        let home = new Home(pageData[0].title);
        window.onload = home.renderPage();
        home.renderPageByClick('#home');

        let bP = new BusinessPlan(pageData[1].title);
        bP.renderPageByClick('#business-plan');

        let pI = new ProjectIdea(pageData[2].title);
        pI.renderPageByClick('#project-idea');

        let contact = new Contact(pageData[3].title);
        contact.renderPageByClick('#contact');
    }
}

new Main();