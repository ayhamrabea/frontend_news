let sideArticle = `
    <a href="" class="article-link">
        <div class="row">
            <div class="col-5">
                <img src=""  alt="">
            </div>
            <div class="col-7">
                <div class="article-text">
                    <span class="article-category">
                        
                    </span>
                    <h5 class="article-title"></h5>
                    <p></p>
                </div>
            </div>
        </div>
    </a>
`

class SideArticle extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = sideArticle
        this.querySelector('span').innerText = this.getAttribute('category')
        this.querySelector('h5').innerText = this.getAttribute('text')
        this.querySelector('img').setAttribute('src',this.getAttribute('src'))
        this.querySelector('a').setAttribute('href',this.getAttribute('href'))

        if(this.getAttribute('excerpt')){
            this.querySelector('p').innerText = this.getAttribute('excerpt')
        }else{
            this.querySelector('p').style.display = 'none';
        }
    }

}

window.customElements.define('side-article' , SideArticle);