'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const tabs = require("./modules/tabs"),
          cards = require("./modules/cards"),
          timer = require("./modules/timer"),
          modal = require("./modules/modal"),
          forms = require("./modules/forms"),
          slider = require("./modules/slider"),
          calc = require("./modules/calc");

    tabs();
    cards();
    timer();
    modal();
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