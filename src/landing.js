import { Page } from "./page";
import TruckImage from "./foodtruck.jpg";

export class Landing extends Page {

    constructor() {

        super();
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