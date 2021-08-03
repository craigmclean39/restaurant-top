import { Page } from "./page";

export class Contact extends Page {

    constructor() {

        super();
    }

    GeneratePage(){
        let contactContent = document.createElement("div");
        contactContent.innerText = "Contact";
        return contactContent;
    }
}