import './button.js'


class Section extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }



    async loadData() {
        this.shadowRoot.innerHTML = `
        <style>
        #card-container {
            width: 1200px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(2, auto);
            gap: 20px; 
            padding: 5px;
            align-items: center; 
            justify-content: center;
        }
        #season-container{
            display: flex;
            justify-content: center;
        }
            </style>
        <div id="season-container">
            <button-component texto="Chapter 1" episodio="1"></button-component>
            <button-component texto="Chapter 2" episodio="2"></button-component>
            <button-component texto="Chapter 3" episodio="3"></button-component>
            <button-component texto="Chapter 4" episodio="4"></button-component>
            <button-component texto="Chapter 5" episodio="5"></button-component>
            <button-component texto="Chapter 6" episodio="6"></button-component>
         </div>
         <div id="card-container"></div>
        `;

        let objFortnite = []; //crear un Array vacio para leerlo despues del "try"
        
        try {
            const response = await fetch("./src/fortnite.json");
            if (!response.ok) throw new Error("Error al cargar el JSON");
            
            const fortniteData = await response.json();
            console.log("Datos cargados:", fortniteData); // Para verificar la estructura del JSON
            
            objFortnite = fortniteData.data.br //asignar al Array vacio los valores del JSON
            
            
        } catch (error) {
            console.error("Error cargando los datos:", error);
        }
        
        function shuffleArray(fortniteData) {
            for (let i = fortniteData.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [fortniteData[i], fortniteData[j]] = [fortniteData[j], fortniteData[i]];
            }
            return fortniteData;
        }
        
        function randomElements(filtrado) {
            return shuffleArray([...filtrado]).slice(0, 10);
        }
        
        console.log(objFortnite) //Para verificar si se lee afuera
        
        const botonesChapter = this.shadowRoot.querySelectorAll('button-component'); //Guarda los botones en un Array
        const object = this.shadowRoot.getElementById("card-container"); 

        botonesChapter.forEach((boton) => {
            boton.addEventListener('click', () => {
               
                const chapterSelection = objFortnite.filter(obj => obj.introduction?.chapter == boton.episodio); //Filtrado cogiendo el atributo ("episodio") del boton. Tmb esta dentro de button.js
                const miLista = randomElements(chapterSelection) //Genera una lista de 10 elementos aleatorios (llama las funciones de arriba)

                object.innerHTML = ""; //Vaciar el container cada vez que inicia la funcion
                miLista.forEach(obj => {
                    const objCard = document.createElement("componente-card");
                    objCard.setAttribute("image", obj.images.icon);
                    objCard.setAttribute("name", obj.name);
                    objCard.setAttribute("season", obj.introduction?.season);
                    objCard.setAttribute("description", obj.description);
                    objCard.setAttribute("value", obj.rarity.displayValue);
                    object.appendChild(objCard);
                });
            });
        })
    }
    connectedCallback() {
        this.loadData();
    }
}

export { Section };