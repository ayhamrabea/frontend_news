var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


document.getElementById("year").innerHTML = new Date().getFullYear()