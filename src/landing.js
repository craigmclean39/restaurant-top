import { Page } from "./page";

export class Landing extends Page {

    constructor() {

        super();
    }

    GeneratePage(){
        let landingContent = document.createElement("div");
        landingContent.innerText = "Home";
        return landingContent;
    }
}