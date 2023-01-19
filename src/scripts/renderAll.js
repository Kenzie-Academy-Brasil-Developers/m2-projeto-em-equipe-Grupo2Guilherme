import { todosPersonagens, personaId } from "./requestRender.js"

let favCount = 0;

async function renderizaPersonagens() {
    const main = document.querySelector('main')
    const section = document.querySelector('#figure')

    const buttonRigth = document.querySelector('.rigth')

    const imgLoad = document.createElement('img')
    const loadDiv = document.createElement('div')

    imgLoad.src = "../assets/loading 1.png"
    loadDiv.className = "loadDiv"
    loadDiv.id = "cardRender2"

    buttonRigth.addEventListener('click', async (e) => {

        section.innerHTML = ''
        loadDiv.appendChild(imgLoad)
        section.appendChild(loadDiv)
        
        setTimeout(async () => 
        {
            section.innerHTML = ''

        favCount++;

        buttonRigth.id = favCount

        let personagem = await personaId(favCount)

        if (personagem.error) {
            personagem = await personaId(826)
            favCount = 826
        }

        const persona = personas(personagem)

        section.appendChild(persona)
        }, 1000)

    })


    const buttonLeft = document.querySelector('.left')

    buttonLeft.addEventListener('click', async (e) => {

        section.innerHTML = ''

        favCount--;

        buttonLeft.id = favCount

        let personagem = await personaId(favCount)

        if (personagem.error) {
            personagem = await personaId(1)
            favCount = 1
        }

        const persona = personas(personagem)

        section.appendChild(persona)

    })
}


function personas(personagem) {

    const div = document.createElement('div')
    // div.classList.add('cardRender')
    div.id = 'cardRender2'

    const nome = document.createElement('h1')
    nome.innerText = personagem.name
    nome.classList.add('nome')
    div.appendChild(nome)

    const estatus = document.createElement('h2')
    estatus.innerText = personagem.status
    estatus.classList.add('status')
    div.appendChild(estatus)

    const bg = document.createElement('img')
    bg.className = 'bg'
    bg.src = "../assets/bg dev.png"
    bg.alt = "bg"
    div.appendChild(bg)

    const image = document.createElement('img')
    image.className = 'dev'
    image.src = personagem.image
    image.alt = personagem.name
    div.appendChild(image)

    const nomePersonagem = document.createElement('p')
    nomePersonagem.classList.add('nome1')
    nomePersonagem.innerText = personagem.name
    div.appendChild(nomePersonagem)

    const statusPersonagem = document.createElement('p')
    statusPersonagem.classList.add('status1')
    statusPersonagem.innerText = personagem.status
    div.appendChild(statusPersonagem)

    const genero = document.createElement('p')
    genero.classList.add('genero')
    genero.innerText = personagem.gender
    div.appendChild(genero)

    const especie = document.createElement('p')
    especie.classList.add('especie')
    especie.innerText = personagem.species
    div.appendChild(especie)

    return div
}

renderizaPersonagens()

