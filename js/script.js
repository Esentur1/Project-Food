'use strict';

import tabs from "./modules/tabs";
import cards from "./modules/cards";
import timer from "./modules/timer";
import modal from "./modules/modal";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    cards();
    timer();
    modal('[data-modal]', '.modal');
    forms();
    slider();
    calc();
    
    //Tabs
    // Timer
    //Модальное окно
    //Формы

    //Slider

    // Calculator

    //Код с уроков
    // console.log(slides);
    // console.log(prev);
    // console.log(next);
    // const myModule = require('./main');
    // const myModuleInstance = new myModule();
    // myModuleInstance.hello();
    // myModuleInstance.goodbye();
    // const app = '123';

    // const number = 1;

    // (function(){
    //     let number = 2;
    //     console.log(number);
    //     console.log(number + 3);
    // }());
    // console.log(number);

    // const user = (function(){
    //     const privat = function () {
    //         console.log("I'm ptivat");
    //     };

    //     return {
    //         satHello: privat
    //     };
    // }());
    // user.satHello();
});