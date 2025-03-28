
class Button extends HTMLElement {
    episodio;
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = `
            <style>
                button{
                    color: azure;
                    background-color: rgb(0, 0, 42);
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    height:40px;
                    width: 120px;
                    border-radius: 20px;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    transition: background-color 0.3s ease;
                    border: 1px;
                    margin: 10px;
                }

                button:hover {
                    background-color: rgb(134, 0, 0); 
                }
            </style>
            <button>${this.getAttribute('texto')}</button>
        `;

        const boton = this.shadowRoot.querySelector('button');
        console.log(boton);
        
        this.episodio = this.getAttribute("episodio")

    }

    static get observedAttributes() {
        return ['texto', "episodio"];
    }

    
}


export {Button};