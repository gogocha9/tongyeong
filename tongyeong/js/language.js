let langSelect = document.getElementById("selectbox");


function chageLangSelect() {
    if(langSelect.options[langSelect.selectedIndex].value === 'ko') {
        location.href = "http://gogocha22.dothome.co.kr/tongyeong/index.html";
    }
    else {
        location.href = "http://gogocha22.dothome.co.kr/tongyeong//eng/index.html";
    }
}