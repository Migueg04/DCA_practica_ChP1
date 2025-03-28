import "../card/card.js"

class Dashboard extends HTMLElement{
    listaPendientes = [];
    listaAtendidos = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    };

    connectedCallback(){
        this.render();
    };

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

         #patient_info{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1000px;
            height: 700px;
        }

         #atendido{
            display: flex;
            flex-direction: column;
            
            align-items: center;
            width: 490px;
            height: 650px;
            border: solid 2px;
            border-radius: 10px;
            margin: 5px;
        }


            
        </style>
        <div id="form_container">
            <form id="form_container>
            <ul>
                <li>
                <label for="name">Nombre Completo del paciente:</label>
                <input type="text" id="name" required>
                </li>
                <br>
                <li>
                <label for="mail">Edad del paciente:</label>
                <input type="number" id="age" required>
                </li>
                <br>
                <button type="submit">Pendiente</button>
            </ul>
            </form>
        </div>

        <br>

        <div id="patient_info">
            <div id="patient">
                
            </div>
            <div id="">
            <div id="atendido">
                
            </div>
            <div id="">
                
            </div>
        </div>

        `;

        const form = this.shadowRoot.querySelector('#form_container');
        form.addEventListener("submit", (e) => {
            e.preventDefault();                                         //prevenir el reinicio de la pagina con un submit del boton
            const name = this.shadowRoot.querySelector('#name').value;     //obtener el valor del nombre del form
            const age = this.shadowRoot.querySelector('#age').value;       //obtener el valor de la edad del form

            const paciente = {name, age}
            this.listaPendientes.push(paciente)

            this.renderPacientes();
        });
    }

    renderPacientes(){
        //PENDIENTES
        const containerPendientes = this.shadowRoot.querySelector("#patient");
        containerPendientes.innerHTML = "";
        this.listaPendientes.forEach(patient =>{
            const card = document.createElement("card-component");
            card.name = patient.name;
            card.age = patient.age;

            card.addEventListener("click", () => {
                this.listaAtendidos.push(patient);
                this.listaPendientes = this.listaPendientes.filter(paciente => paciente.name !== card.name);
                this.renderPacientes();
            })

        containerPendientes.appendChild(card);

        });

        //Atendidos
        const containerAtendidos = this.shadowRoot.querySelector("#atendido");
        containerPendientes.innerHTML = "";
        this.listaPendientes.forEach(patient =>{
            const card = document.createElement("card-component");
            card.name = patient.name;
            card.age = patient.age;

            containerPendientes.appendChild(card);
        })
    }

}

customElements.define("app-dashboard", Dashboard);
export default Dashboard;