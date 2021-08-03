import { Menu } from "./menu";
import { Page } from "./page";

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

mainPage.AddPage(menuPage);