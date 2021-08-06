import { Menu } from "./menu";
import { Contact } from "./contact";
import { Landing } from "./landing";
import './styles.css';


class MainPageHandler{

    constructor() {

        this.body = document.getElementsByTagName("body")[0];

        //Header
        this.header = document.createElement("div");
        this.header.id = "header";

        this.headerElements = [];

        this.#CreateHeaderItem("Home");
        this.#CreateHeaderItem("Menu");
        this.#CreateHeaderItem("Contact");

        this.#AddHeaderElements();

 
        this.body.appendChild(this.header);


        this.mainContent = document.createElement("div");
        this.mainContent.id = "content";
        this.body.appendChild(this.mainContent);
    }

    #CreateHeaderItem(name)
    {
        let item = document.createElement("a");
        item.innerText = name;
        item.classList.add("header-item");
        item.dataset.headerId = name;
        item.addEventListener('click', this.#HeaderItemClicked);
        this.headerElements.push(item);
    }

    #AddHeaderElements()
    {
        for(let i = 0; i < this.headerElements.length; i++)
        {
            this.header.appendChild(this.headerElements[i]);
        }
    }

    #HeaderItemClicked(evt)
    {
        switch(evt.target.dataset.headerId)
        {
            case "Home":
                {
                    console.log("Home");
                    break;
                }
            case "Menu":
                {
                    console.log("Menu");
                    break;
                }
            case "Contact":
                {
                    console.log("Contact");
                    break;
                }
        }
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

        this.body.style.backgroundImage = `url(${newPage.GetBackgroundImage()})`;
    }
}

let mainPage = new MainPageHandler();
let menuPage = new Menu();
let contactPage = new Contact();
let landingPage = new Landing();

//mainPage.AddPage(menuPage);
//mainPage.AddPage(contactPage);
mainPage.AddPage(landingPage);