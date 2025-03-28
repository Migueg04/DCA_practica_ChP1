class Card extends HTMLElement{
    name;
    age;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    static get observedAttributes(){
        return ["name", "age"];
    }

    attributeChangedCallback(name, newValue){
        this[name] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>

        #atendido{
            background-color: rgb(162, 214, 214);
            width: 450px;
            border: solid 2px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }

         #pendiente{
            background-color: rgb(162, 214, 214);
            width: 450px;
            border: solid 2px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;  
            margin-bottom: 5px
            
        }
        </style>
        
        <div id="pendiente">
            <h2>${this.noame}</h2>
            <h4>${this.age} años</h4>
            <button type="submit">Atendido</button>
        </div>
        `
    }
}

customElements.define("card-component", Card)
export default Card; 