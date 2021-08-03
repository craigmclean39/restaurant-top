import { Page } from "./page";

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
}