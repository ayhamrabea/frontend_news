const article = `

    <a href="./artical.html" class="article-link">
        <img src="" alt="">
        <div class="article-text mt-3">
            <span class="article-category">
            
            </span>
            <h5 class="article-title"></h5>
            <p></p>
        </div>
    </a>

`

class Articltcommponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = article
        this.querySelector('span').innerText = this.getAttribute('category')
        this.querySelector('h5').innerText = this.getAttribute('title')
        this.querySelector('img').setAttribute('src',this.getAttribute('src'))
        this.querySelector('a').setAttribute('href',this.getAttribute('href'))

        if(this.getAttribute('excerpt')){
            this.querySelector('p').innerText = this.getAttribute('excerpt')
        }else{
            this.querySelector('p').style.display = 'none';
        }
    }
}

window.customElements.define('article-component' , Articltcommponent)
