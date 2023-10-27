console.log('sucesso')

class TituloDinamico extends HTMLElement {
    constructor(){
        //super é o construtor do html elements 
        super();

        const shadow = this.attachShadow({mode:"open"});

        //base component 
        const componentRoot = document.createElement('h1')
        componentRoot.textContent = this.getAttribute("titulo");
        
        //estilizar 
        const style = document.createElement("style");
        style.textContent = ` 
        h1{
            color:red;
        }
        ` ;
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

//sempre colocar o hifem no nome , na string 
customElements.define('titulo-dinamico',TituloDinamico);