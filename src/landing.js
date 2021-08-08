import { Page } from "./page";
import TruckImage from "./images/foodtruck.jpg";
import LogoIcon from "./images/delivery-truck.svg";

export class Landing extends Page {

    constructor() {

        super();
        this.pageTitle = "Home";
    }

    GeneratePage(){
        let landingContent = document.createElement("div");
        landingContent.classList.add("landing-flex");

        let logoIcon = document.createElement("div");
        logoIcon.style.backgroundImage = `url(${LogoIcon})`;
        logoIcon.classList.add("logo");
        logoIcon.innerText = "POUTINE TRUCK";  

        landingContent.appendChild(logoIcon);

        /* let description = document.createElement("p");
        description.classList.add("landing-desc");
        description.innerText = "Classic poutine at affordable prices.";

        landingContent.appendChild(description); */


        return landingContent;
    }

    GetBackgroundImage()
    {
        return TruckImage;
    }
}