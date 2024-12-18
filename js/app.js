const mql = window.matchMedia("(max-width: 992px)");
const changSlideView = (slide) =>{
    var swiper = new Swiper(".swiper", {
        slidesPerView: slide,
        spaceBetween: 30,
        autoplay:true,
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

const heandelOientationChange = (e) => {
    if (mql.matches) {
        changSlideView(1);
    } else {
        changSlideView(3);
    }
}



heandelOientationChange();
mql.onchange = (e) =>{
    heandelOientationChange(e);
}



document.getElementById("year").innerHTML = new Date().getFullYear()