class Card extends HTMLElement{
    nombre;
    edad;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    static get observedAttributes(){
        return ["nombre", "edad"];
    }

    attributeChangedCallback(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
            #patient_info{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1000px;
            height: 700px;
        }

        #patient{
            display: flex;
            flex-direction: column;
            
            align-items: center;
            width: 490px;
            height: 650px;
            border: solid 2px;
            border-radius: 10px;
            margin: 5px;
        }

        #info{
            background-color: rgb(162, 214, 214);
            width: 450px;
            border: solid 2px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            
        }

        </style>
        <div id="patient_info">
            <div id="patient">
            <h1>Pendiente</h1>
            <div id="info">
                <h2>${this.nombre}</h2>
                <h4>${this.edad} años</h4>
                <button type="submit">Atendido</button>
            </div>
            </div>
            <div id="patient">
            <h1>Atendido</h1>
            <div id="info">
                <h2>${this.nombre}</h2>
                <h4>${this.edad}</h4>
            </div>
            </div>
        </div>
        `
    }
}

customElements.define("card-component", Card)
export default Card; 