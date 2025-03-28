import "./dashboard/dashboard.js";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    };

    connectedCallback(){
        this.render();
    };

    render(){
        this.shadowRoot.innerHTML = `
            <h1>Clinica la otra vida</h1>
            <app-dashboard></app-dashboard>
        `
    }
}

customElements.define("app-container", AppContainer);