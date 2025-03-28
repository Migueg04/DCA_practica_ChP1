import Card from "../card/card.js" 

class Dashboard extends HTMLElement{
    nombre;
    edad;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    };

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
        #form_container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border: solid 2px;
            border-radius: 10px;
            height: 200px;
            width: 300px;
        }

            
        </style>
        <div id="form_container">
            <form action="/my-handling-form-page" method="post">
            <ul>
                <li>
                <label for="name">Nombre Completo del paciente:</label>
                <input type="text" id="name" name="patient_name" required>
                </li>
                <br>
                <li>
                <label for="mail">Edad del paciente:</label>
                <input type="number" id="age" name="patient_age" required>
                </li>
                <br>
                <button type="submit">Pendiente</button>
            </ul>
            </form>
        </div>

        <br>

        <card-component></card-component>

        `;

    }

    
}

customElements.define("app-dashboard", Dashboard);
export default Dashboard;