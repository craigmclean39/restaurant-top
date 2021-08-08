import { Page } from "./page";
import PotatoImage from "./images/overhead-view-of-potatoes.jpg";

export class Contact extends Page {

    constructor() {

        super();
        this.pageTitle = "Contact";
    }

    #GenerateContactField(parent, subtitle, content)
    {
        let contactSub = document.createElement("h3");
        contactSub.classList.add("contact-subtitle");
        contactSub.innerText = subtitle;

        let contactSubContent = document.createElement("p");
        contactSubContent.classList.add("contact-content");
        contactSubContent.innerText = content;

        parent.appendChild(contactSub);
        parent.appendChild(contactSubContent);
    }

    GeneratePage(){
        let contactContent = document.createElement("div");
        contactContent.classList.add("contact-us")

        let contactTitle = document.createElement("h2");
        contactTitle.innerText = "Contact Us";
        contactTitle.classList.add("contact-title");
        contactContent.appendChild(contactTitle);

        this.#GenerateContactField(contactContent, "ADDRESS", "123 Cleveland Ave, Squamish, BC");
        this.#GenerateContactField(contactContent, "PHONE NUMBER", "1-604-555-1234");
        this.#GenerateContactField(contactContent, "EMAIL ADDRESS", "poutine.truck@doesnotexist.com");
        
        return contactContent;
    }

    GetBackgroundImage()
    {
        return PotatoImage;
    }
}