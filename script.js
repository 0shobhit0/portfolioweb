let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingeffect = new Typed("#texts",{
    strings:["Shobhit Asthana","Web Developer","Software Engineer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000

})
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
