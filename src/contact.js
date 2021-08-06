import { Page } from "./page";
import PotatoImage from "./overhead-view-of-potatoes.jpg";

export class Contact extends Page {

    constructor() {

        super();
    }

    GeneratePage(){
        let contactContent = document.createElement("div");
        contactContent.innerText = "Contact";
        return contactContent;
    }

    GetBackgroundImage()
    {
        return PotatoeImage;
    }
}