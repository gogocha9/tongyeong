let zoomImg_01 = document.getElementById('zoom-img_1');
let zoomImg_02 = document.getElementById('zoom-img_2');
let zoomImg_03 = document.getElementById('zoom-img_3');
let zoomImg_04 = document.getElementById('zoom-img_4');

let popup_01 = document.getElementById('popup_01');
let popup_02 = document.getElementById('popup_02');
let popup_03 = document.getElementById('popup_03');
let popup_04 = document.getElementById('popup_04');

zoomImg_01.onclick = function() {
    popup_01.classList.toggle('zoom'); 
}

zoomImg_02.onclick = function() {
    popup_02.classList.toggle('zoom'); 
}

zoomImg_03.onclick = function() {
    popup_03.classList.toggle('zoom'); 
}

zoomImg_04.onclick = function() {
    popup_04.classList.toggle('zoom'); 
}
