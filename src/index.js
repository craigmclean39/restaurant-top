import { Menu } from "./menu";
import { Contact } from "./contact";
import { Landing } from "./landing";
import './styles.css';


class MainPageHandler{

    constructor() {

        this.headerElements = [];
        this.pages = [];

        this.currentPageIndex = -1;


        this.body = document.getElementsByTagName("body")[0];

        //Create the Header Div
        this.header = document.createElement("div");
        this.header.id = "header";
        this.body.appendChild(this.header);

        //Create the div to hold the page content
        this.mainContent = document.createElement("div");
        this.mainContent.id = "content";
        this.body.appendChild(this.mainContent);

        //Bind the eventhandler so that it has access to the methods in the MainPageHandler class
        this.HeaderItemClicked = this.HeaderItemClicked.bind(this);
    }

    

    #CreateHeaderItem(name, id)
    {
        let item = document.createElement("a");
        item.innerText = name;
        item.classList.add("header-item");
        item.dataset.headerId = id;
        item.addEventListener('click', this.HeaderItemClicked);
        this.headerElements.push(item);
    }

    #AddHeaderElements()
    {
        for(let i = 0; i < this.headerElements.length; i++)
        {
            this.header.appendChild(this.headerElements[i]);
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

    //This function has to be public so that it can be bound(bind) in the constructor
    HeaderItemClicked(evt)
    {
        this.SwitchPage(evt.target.dataset.headerId);
    }

    SwitchPage(id)
    {
        if(id != this.currentPageIndex)
        {
            this.currentPageIndex = id;

            this.#ClearMainContent();
            this.#FillMainContent(this.pages[id].GeneratePage());

            this.body.style.backgroundImage = `url(${this.pages[id].GetBackgroundImage()})`;  
        }
        
    }

    AddPage(newPage)
    {
        let l = this.pages.push(newPage);
        this.#CreateHeaderItem(newPage.pageTitle, l - 1);
    }

    Initialize()
    {
        this.#AddHeaderElements();
        this.SwitchPage(0);
    }
}


let pageHandler = new MainPageHandler();
let menuPage = new Menu();
let contactPage = new Contact();
let landingPage = new Landing();


pageHandler.AddPage(landingPage);
pageHandler.AddPage(menuPage);
pageHandler.AddPage(contactPage);

pageHandler.Initialize();