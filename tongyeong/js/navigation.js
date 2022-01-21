"use strict";

let menu_sm = document.querySelector('#menu-sm');
let gnb = document.querySelector('#gnb');
let navigation = document.querySelector('#navigation');
let body = document.querySelector('body');
let toTop = document.querySelector('#toTop');
let partners_tab_wrap = document.querySelectorAll('#partners_tab_wrap li button');

window.onscroll = function() {
    if(window.scrollY > 0) {
        toTop.classList.add('down');
        gnb.classList.add('down');
    } else if (window.scrollY === 0) {
        gnb.classList.remove('down');
        toTop.classList.remove('down');
    }
}

menu_sm.onclick = function() {
    gnb.classList.toggle('active');
    menu_sm.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('active');
};

// function activeLink() {
//     partners_tab_wrap.forEach((item) => 
//     item.classList.remove('active'));
//     this.classList.add('active');
// }

// partners_tab_wrap.forEach((item) =>
// item.addEventListener('click', activeLink));