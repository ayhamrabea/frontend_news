let mostReadCard = `
<div class="card p-5 mb-5 bg-white">
    <a href="">
        <div class="row g-0">
        <div class="col-md-5">
            <img src="" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-7">
            <div class="card-body">
            <h1 class="card-title"></h1>
            <p class="card-text"></p>
            <h6 class="card-text"><small class="text-muted"></small></h6>
            </div>
        </div>
        </div>
    </a>
</div>
`

class MostReadCard extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = mostReadCard
        this.querySelector('a').setAttribute('href',this.getAttribute('href'))
        this.querySelector('img').setAttribute('src',this.getAttribute('src'))
        this.querySelector('h1').innerText = this.getAttribute('title')
        this.querySelector('p').innerText = this.getAttribute('excerpt')
        this.querySelector('h6').innerText = this.getAttribute('date')


    
    }

}

window.customElements.define('most-read-card' , MostReadCard);