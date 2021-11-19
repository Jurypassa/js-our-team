// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:

// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.

// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.



let membri = [
    {
        "immagine": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "posizione": "Founder & CEO"
    },
    {
        "immagine": "img/angela-caroll-chief-editor.jpg",
        "nome": "Angela Caroll",
        "posizione": "Chief Editor"
    },
    
    {
        "immagine": "img/walter-gordon-office-manager.jpg",
        "nome": "Walter Gordon",
        "posizione": "Office Manager"
    },
    {
        "immagine": "img/angela-lopez-social-media-manager.jpg",
        "nome": "Angela Lopez",
        "posizione": "Social Media Menager"
    },
    {
        "immagine": "img/scott-estrada-developer.jpg",
        "nome": "Scott Estrada",
        "posizione": "Developer"
    },
    {
        "immagine": "img/barbara-ramos-graphic-designer.jpg",
        "nome": "Barbara Ramos",
        "posizione": "Graphic Designer"
    }
];


const container = document.querySelector(".team-container");
const add = document.getElementById("addMemberButton");

add.addEventListener("click", function(){

    const member = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;
    

    const newMember = ({
        "immagine": image,
        "nome": member,
        "posizione": role
    });

    container.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src=${image}/>
        </div>
        <div class="card-text">
            <h3>${member}</h3>
            <p>${role}</p>
        </div>
    </div>
    `

    membri.push(newMember);
    
});




for (let i = 0; i < membri.length; i++){
    container.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src=${membri[i].immagine}/>
        </div>
        <div class="card-text">
            <h3>${membri[i].nome}</h3>
            <p>${membri[i].posizione}</p>
        </div>
    </div>
    `
}



console.log(membri);
