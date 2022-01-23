"use strict";

let menu_sm = document.querySelector('#menu-sm');
let gnb = document.querySelector('#gnb');
let navigation = document.querySelector('#navigation');
let body = document.querySelector('body');
let toTop = document.querySelector('#toTop');
let pf_box = document.querySelectorAll(".pf-box");

window.onscroll = function() {
    if(window.scrollY > 0) {
        toTop.classList.add('down');
        gnb.classList.add('down');
        gnb.classList.remove('position-relative');
        gnb.classList.add('position-fixed');
    } else if (window.scrollY === 0) {
        gnb.classList.remove('down');
        toTop.classList.remove('down');
        gnb.classList.remove('position-fixed');
        gnb.classList.add('position-relative');
    }
}

menu_sm.onclick = function() {
    gnb.classList.toggle('active');
    menu_sm.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('active');
};

window.onload = function() {
    pf_box.forEach(i, pf_box)
}