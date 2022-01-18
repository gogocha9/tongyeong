"use strict";

let menu_sm = document.querySelector('#menu-sm');
let gnb = document.querySelector('#gnb');
let navigation = document.querySelector('#navigation');
let body = document.querySelector('body');

menu_sm.onclick = function() {
    gnb.classList.toggle('active');
    menu_sm.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('active');
};