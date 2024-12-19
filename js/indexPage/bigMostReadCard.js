let bigMostReadCard = `
<div class="card p-5 mb-5 bg-white">
    <a href="">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="card-title"></h1>
        <p class="card-text"></p>
        <h6 class="card-text"><small class="text-muted"></small></h6>
        </div>
    </a>
</div>`

class BigMostReadCard extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = bigMostReadCard
        this.querySelector('a').setAttribute('href',this.getAttribute('href'))
        this.querySelector('img').setAttribute('src',this.getAttribute('src'))
        this.querySelector('h1').innerText = this.getAttribute('title')
        this.querySelector('p').innerText = this.getAttribute('excerpt')
        this.querySelector('h6').innerText = this.getAttribute('date')


        
    }

}

window.customElements.define('big-most-read-card' , BigMostReadCard);