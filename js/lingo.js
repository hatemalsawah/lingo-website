
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let mainMenu = document.querySelector(".navbar")
let vidBtn = document.querySelectorAll(".video-btn")


function showform(){
    loginForm.classList.add("active")
}
function hideform(){
    loginForm.classList.remove("active")

}
function showmenu(){
    menuBar.classList.toggle("fa-times")
    mainMenu.classList.toggle("active")
}
 vidBtn.forEach(slide =>{
     slide.addEventListener("click" , function(){
         document.querySelector(".controls .blue-var").classList.remove("blue-var");
         slide.classList.add("blue-var");
         let src = slide.getAttribute("data-src");
         document.querySelector("#video-slider").src = src;})
 })

var swiper = new Swiper(".review-slider", {
    spaceBetween :20,
    loop:true,
    autoplay:{
        delay:3500,
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});