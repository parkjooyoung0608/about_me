

// Home 텍스트 타이핑 효과
const content = "Hello, I’m Jooyoung!";
const text = document.querySelector(".title h1");
let textIdx = 0;


function typing(){
    let txt = content[textIdx++];
    
    text.innerHTML += txt;

    if (textIdx > content.length) {
        text.textContent = "";
        textIdx = 0;
    }
}

setInterval(typing, 200)


// About 스크롤에 반응하는 애니메이션
let aboutCard = document.querySelector(".about_profile");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    console.log("scrollY", value);
    if (value < 400){
        aboutCard.style.animation = "about_backslide 1s ease-out forwards";
    } else {
        aboutCard.style.animation = "about_slide 1s ease-out"
    }
})


// Favorite Slide
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;

let currentIdx = 0;

let slideWidth = 300;
let slideMargin = 30;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next")

function moveSlide(num){
    // slide 가 움직일때 slide index가 1이면 -330px 2면 -660px
    slides.style.left = -num * 330 +'px';
    currentIdx = num;
}


nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount-3){
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
})

prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
})


