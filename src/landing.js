import { Page } from "./page";
import TruckImage from "./images/foodtruck.jpg";

export class Landing extends Page {

    constructor() {

        super();
        this.pageTitle = "Home";
    }

    GeneratePage(){
        let landingContent = document.createElement("div");
        landingContent.innerText = "Home";
        return landingContent;
    }

    GetBackgroundImage()
    {
        return TruckImage;
    }
}