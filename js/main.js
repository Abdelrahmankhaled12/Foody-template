$('.owl-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

let btn = document.querySelector(".scroll");
window.onscroll =function () {
    if(window.scrollY >= 400) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}

btn.onclick = function () {
    window.scrollTo({
        top :0,
        behavior:"smooth"
    })
};









