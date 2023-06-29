import { getResource, getDataForCards } from "../services/services";

function cards (){
    // class MenuCard {
    //     constructor(src, alt, title, descr, price) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //     }
    // }

    // const menuItems = document.querySelectorAll('.menu__item');

    // function createValuesWithFeaturesCards(obj, i) {

    //     return [obj[i][0].src, 
    //            obj[i][0].alt, 
    //            obj[i][1].innerText, 
    //            obj[i][2].innerText, 
    //            obj[i][4].innerText];
    // }
    // const objMenuItems = {};
    // menuItems.forEach((menuItem, i) => {
    //     let arrFeatures = [];
    //     for (let elem of menuItem.childNodes) {
    //         if (elem.nodeName != "#text") {
    //             arrFeatures.push(elem);
    //         } else {
    //             continue;
    //         }
    //     }
    //     console.log(arrFeatures);
    //     objMenuItems[i] = arrFeatures;
    // });
    // console.log(objMenuItems);
    // console.log(createValuesWithFeaturesCards(objMenuItems, 0));

    // const menuFitnes = new MenuCard(objMenuItems[0][0].src, objMenuItems[0][0].alt, objMenuItems[0][1].innerText, objMenuItems[0][2].innerText, objMenuItems[0][4].innerText);

    // console.log(menuFitnes);

    //Используем классы для карточек Пример преподавателя

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
 
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        
        }
    }

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu .container", 'menu__item', 'big').render();
    //         });
    //     });

    getDataForCards('http://localhost:3000/menu', MenuCard);
    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     360,
    //     ".menu .container",
    //     'menu__item',
    //     'big'
    // ).render();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню "Премиум"',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     200,
    //     ".menu .container",
    //     'menu__item',
    //     'big'
    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     100,
    //     ".menu .container",
    //     'menu__item',
    //     'big'
    // ).render();

}

export default cards;