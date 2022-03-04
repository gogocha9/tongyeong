"use strict";

let menu_sm = document.querySelector("#menu-sm");
let gnb = document.querySelector("#gnb");
let navigation = document.querySelector("#navigation");
let body = document.querySelector("body");
let toTop = document.querySelector("#toTop");

window.onscroll = function () {
  if (window.scrollY > 0) {
    toTop.classList.add("down");
    gnb.classList.add("down");
    navigation.classList.add("down");
  } else if (window.scrollY === 0) {
    gnb.classList.remove("down");
    toTop.classList.remove("down");
    navigation.classList.remove("down");
  }
};

menu_sm.onclick = function () {
  gnb.classList.toggle("active");
  menu_sm.classList.toggle("active");
  navigation.classList.toggle("active");
  body.classList.toggle("active");
};
