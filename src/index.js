import { Menu } from "./menu";
import { Contact } from "./contact";
import { Landing } from "./landing";

class MainPageHandler{

    constructor() {

        this.mainContent = document.createElement("div");
        this.mainContent.id = "content";

        document.getElementsByTagName("body")[0].appendChild(this.mainContent);
    }

    #ClearMainContent()
    {
        while(this.mainContent.firstChild != undefined)
        {
            this.mainContent.removeChild(this.mainContent.firstChild);
        }
    }

    #FillMainContent(newContent)
    {
        this.mainContent.appendChild(newContent);
    }

    AddPage(newPage)
    {
        this.#ClearMainContent();
        this.#FillMainContent(newPage.GeneratePage());
    }
}

let mainPage = new MainPageHandler();
let menuPage = new Menu();
let contactPage = new Contact();
let landingPage = new Landing();

mainPage.AddPage(menuPage);
mainPage.AddPage(contactPage);
mainPage.AddPage(landingPage);