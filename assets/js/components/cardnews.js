class CardNews extends HTMLElement{
    Constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

build(){

    const componentRoot = document.createElement('div');
//setando as classes 
    componentRoot.setAttribute("class","card");

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute("class","card_left");


    //colocando todos esses elementos no cardleft 
    const autor = document.createElement("span");
    const linkTitle = document.createElement("a");
    const newsContent = document.createElement("p")

    //adicionar no card left 

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.setAttribute("class","card_right");~

    const newsImage = document.createElement("img");
    cardRight.appendChild("newsImage");

    //colocando uma div dentro da div maior 
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    
    //lembrar de retornar sempre 
    return componentRoot;
}

styles(){



}



}

customElements.define("card-news",CardNews);