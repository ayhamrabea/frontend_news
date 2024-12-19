import { API_URL } from "../urls.js";

console.log(API_URL);

async function sliderfetch() {

    let resbons = await fetch(API_URL + "slider");
    let data = await resbons.json();

    data.map(slide => {
        const el = document.createElement('slider-component')
        el.setAttribute('src' , slide.img_uri)
        el.setAttribute('title' , slide.title)
        el.setAttribute('href' , slide.link)

        document.getElementById('carousel-inner').appendChild(el)
    })

    let sliders = document.getElementsByClassName("carousel-item");
    sliders[0].classList.add('active');
}


async function sidearticlefetch() {

    let resbons = await fetch(API_URL + "header-articles");
    let data = await resbons.json();

    data.map(article => {
        const el = document.createElement('side-article')
        el.setAttribute('href' , article.link)
        el.setAttribute('src' , article.img_uri)
        el.setAttribute('category' , article.category)
        el.setAttribute('text' , article.title)

        document.getElementById('header-articles').appendChild(el)
    })

}

async function articlefetch() {

    let resbons = await fetch(API_URL + "news");
    let data = await resbons.json();

    data.map(article => {
        const el = document.createElement('article-component')
        el.classList.add("col-lg-3","col-md-4","col-sm-6","mt-4")
        el.setAttribute('href' , article.link)
        el.setAttribute('src' , article.img_uri)
        el.setAttribute('category' , article.category)
        el.setAttribute('title' , article.title)

        document.getElementById('article-news').appendChild(el)
    })

}


async function mostread() {

    let resbons = await fetch(API_URL + "most-read");
    let data = await resbons.json();

    for(let i = 0; data.length; i++){
        if(i%2 == 0){
            const el = document.createElement('most-read-card')
            el.setAttribute('title' , data[i].title)
            el.setAttribute('src' , data[i].img_uri)
            el.setAttribute('href' , data[i].link)
            el.setAttribute('excerpt' , data[i].paragraph)
            el.setAttribute('muted' , data[i].date)

            document.getElementById('most-read').appendChild(el)
        }else{
            const el = document.createElement('big-most-read-card')
            el.setAttribute('title' , data[i].title)
            el.setAttribute('src' , data[i].img_uri)
            el.setAttribute('href' , data[i].link)
            el.setAttribute('excerpt' , data[i].paragraph)
            el.setAttribute('text' , data[i].date)

            document.getElementById('most-read').appendChild(el)
        }
    }

}

mostread();
sliderfetch();
sidearticlefetch();
articlefetch();