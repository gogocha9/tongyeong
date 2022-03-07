"use strict";

let menu_sm = document.querySelector("#menu-sm");
let gnb = document.querySelector("#gnb");
let navigation = document.querySelector("#navigation");
let body = document.querySelector("body");
let toTop = document.querySelector("#toTop");

let stop_left = document.querySelector(".stop-left");
let stop_right = document.querySelector(".stop-right");
let movement_left = document.querySelector(".movement-left");
let movement_right = document.querySelector(".movement-right");

let movement_left_x = document
  .querySelector(".movement-left")
  .getAttribute("aria-disabled");
let movement_right_x = document
  .querySelector(".movement-right")
  .getAttribute("aria-disabled");

// stop_left.onclick = function () {
//   stop_right.classList.remove("active");
//   stop_left.classList.add("active");
// };

// stop_right.onclick = function () {
//   stop_left.classList.remove("active");
//   stop_right.classList.add("active");
// };

// movement_left.onclick = function () {
//   stop_right.classList.remove("active");
//   stop_left.classList.add("active");
// };

// movement_right.onclick = function () {
//   stop_left.classList.remove("active");
//   stop_right.classList.add("active");
// };

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
