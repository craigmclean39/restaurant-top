import { Page } from "./page";
import PoutineImage from "./images/poutine-fries-gravy-cheese.jpg";

export class Menu extends Page {

    constructor() {

        super();
        //console.log("Menu - Constructor");
    }

    GeneratePage(){
        //console.log("Menu - Generate Page");
        let menuContent = document.createElement("div");
        menuContent.innerText = "Menu";
        return menuContent;
    }

    GetBackgroundImage()
    {
        return PoutineImage;
    }
}