class Card extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'description', 'name', 'value', 'season'];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
          

        this.shadowRoot.innerHTML = `
            <style>
                .object-card{
                    margin-top: 30px;
                    background-color: rgb(0, 0, 42);
                    width: 250px;
                    height: 400px;
                    display: flex;
                    justify-content: center;
                    border-radius: 10px;
                }

                .img{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    max-width: 210px;
                    max-width: 150px;
                    margin-top: 5px;
                }

                .object-card p{
                    color: azure;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    margin: 10px;
                }

            </style>

            <div class="object-card">
                <div>
                    <img src="${this.getAttribute('image')}" class="img">
                    <p class="obj-description">Season: ${this.getAttribute('season')}</p>
                    <p class="obj-name">Object Name: ${this.getAttribute('name')}</p>
                    <p class="obj-value">Rarity: ${this.getAttribute('value')}</p>
                    <p class="obj-description">Description: ${this.getAttribute('description')}</p>
                </div>
            </div>
        `;
    }
}
export { Card };