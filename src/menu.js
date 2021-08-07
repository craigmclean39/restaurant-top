import { Page } from "./page";
import PoutineImage from "./images/poutine-fries-gravy-cheese.jpg";

export class Menu extends Page {

    constructor() {

        super();
        this.pageTitle = "Menu";

        const p1 = ["Classic Poutine", "The OG Poutine. Triple fried russet potatoes, authentic Quebec cheese curds, and delicious house made gravy made with roasted ox-tail.", "$8.99"];
        const p2 = ["Beef Brisket Poutine", "Classic Poutine topped with our smoked beef brisket.", "$12.99"];
        const p3 = ["Pulled Pork Poutine", "Classic Poutine topped with our slow cooked pulled pork.", "$12.99"];
        const p4 = ["Fully Loaded", "Classic Poutine topped sour cream, green onions, and bacon bits.", "$11.99"];
        const p5 = ["Peppercorn Poutine", "Our classic fries topped with cheese curds, a creamy peppercorn sauce, sauteed mushrooms and crispy fried onions.", "$12.99"];

        this.poutineItems = [p1, p2, p3, p4, p5];

        const e1 = ["Sour Cream", "", "$0.99"];
        const e2 = ["Bacon", "", "$1.99"];
        const e3 = ["Crispy Onions", "", "$1.49"];
        const e4 = ["Green Onions", "", "$0.49"];
        const e5 = ["Mushrooms", "", "$1.99"];

        this.extraItems = [e1, e2, e3, e4, e5];

        const d1 = ["Craft Soda", "", "$1.99"];
        const d2 = ["Water", "", "$0.99"];
        const d3 = ["Kombucha", "", "$2.99"];
        const d4 = ["Water Kefir", "", "$2.99"];

        this.drinkItems = [d1, d2, d3, d4];
    }

    


    #CreateSubMenu(title, items)
    {
        let subMenuWrapper = document.createElement("div");
        subMenuWrapper.classList.add("sub-menu-wrapper");

        let subMenu = document.createElement("div");
        subMenu.classList.add("sub-menu");

        let menuTitle = document.createElement("div");
        menuTitle.classList.add("sub-menu-title");
        menuTitle.innerText = title.toUpperCase();

        subMenu.appendChild(menuTitle);

        let menuItems = document.createElement("div");
        menuItems.classList.add("menu-items");

        if(items != undefined)
        {
            for(let i = 0; i < items.length; i++)
            {
                let menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");

                let menuItemName = document.createElement("div");
                menuItemName.classList.add("menu-item-title");
                menuItemName.innerText = items[i][0].toUpperCase();

                let menuItemDescription = document.createElement("div");
                menuItemDescription.classList.add("menu-item-desc");

                let menuPrice = document.createElement("span");
                menuPrice.classList.add("menu-price");

                menuItemDescription.innerText = items[i][1];
                menuPrice.innerText = items[i][2];

                menuItem.appendChild(menuItemName);

                if(items[i][1] != "")
                {
                    menuItemDescription.appendChild(menuPrice);
                    menuItem.appendChild(menuItemDescription);
                }
                else {
                    menuItemName.appendChild(menuPrice);
                    menuItemName.classList.add("menu-item-one-line");
                }
                
                
                menuItems.appendChild(menuItem);

            }
        }

        subMenu.appendChild(menuItems);
        subMenuWrapper.appendChild(subMenu);

        return subMenuWrapper;
    }

    GeneratePage() {
        let menuContent = document.createElement("div");

        menuContent.appendChild(this.#CreateSubMenu("Poutines", this.poutineItems));
        menuContent.appendChild(this.#CreateSubMenu("Add Ons", this.extraItems));
        menuContent.appendChild(this.#CreateSubMenu("Drinks", this.drinkItems));

        return menuContent;
    }

    GetBackgroundImage()
    {
        return PoutineImage;
    }
}