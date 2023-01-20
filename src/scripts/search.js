import { personagemAPI } from "./requestsSearch.js";

async function renderPersonsPesquisa () {
 
    const main    = document.querySelector('main')
    const section = document.querySelector('#figure')
    const input   = document.querySelector('.searchInput')
    const footer  = document.querySelector('footer')
    const form    = document.getElementById('searchDiv')

    const imgLoad = document.createElement('img')
    const loadDiv = document.createElement('div')

    imgLoad.src = "../assets/loading 1.png"
    loadDiv.className = "loadDiv"

    const voltar = document.createElement('button')

    voltar.id = 'voltar'
    voltar.innerText = 'Voltar para um lugar seguro'

    voltar.addEventListener('click', () => {
        window.location.replace('/src/pages/personagens.html')
    })
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        main.innerHTML = ''

        footer.appendChild(voltar)
        
        loadDiv.appendChild(imgLoad)
        main.appendChild(loadDiv)

        if(input.value === ''){
            
            setTimeout(() => {

                main.innerHTML = ''
                section.innerHTML = ''

                const img = document.createElement('img')
                const div402 = document.createElement('div')

                img.src = "../assets/Error402.svg"
                img.className = 'erro402'
                div402.classList.add = "div402"
                
                div402.appendChild(img)
                section.appendChild(div402)
                main.appendChild(section)
            }, 1000)
        }else{

            const valorInput = input.value
            const palavras = valorInput.split(" ")
    
            for (let i = 0; i < palavras.length; i++) {
                palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1).toLowerCase();
            }
    
            const palavrasSemArray = palavras.join(" ");
    
            const personagens = await personagemAPI(palavrasSemArray)
    
            if(personagens.error){
                setTimeout(() => {
    
                    main.innerHTML = ''
                    section.innerHTML = ''
    
                    const img = document.createElement('img')
                    const div402 = document.createElement('div')
    
                    img.src = "../assets/Error402.svg"
                    img.className = 'erro402'
                    div402.classList.add = "div402"
                    
                    div402.appendChild(img)
                    section.appendChild(div402)
                    main.appendChild(section)
                }, 1000)
            }else{
                
                if(personagens.results.length === 1) {
                    setTimeout(() => {

                    main.innerHTML = ''
                    section.innerHTML = ''
                    const personSel = criarPersonsPesquisa(personagens.results[0])

                    section.appendChild(personSel)
                    main.appendChild(section)
                }, 1000)
                }else{
                    
                    function getRandomArbitrary(min, max) {
                        return Math.random() * (max - min) + min;
                    }

                    const tamanho = personagens.results.length

                    const random = Math.round(getRandomArbitrary(1, tamanho))
            
                    setTimeout(() => {

                        main.innerHTML = ''
                        section.innerHTML = ''
                        const personSel = criarPersonsPesquisa(personagens.results[random])
    
                        section.appendChild(personSel)
                        main.appendChild(section)
                    }, 1000)
                }
            }
        }  
    });
}

function criarPersonsPesquisa(personagem) {

    const div      = document.createElement('div')
    const h1       = document.createElement('h1')
    const h2       = document.createElement('h2')
    const bg       = document.createElement('img')
    const img      = document.createElement('img')
    const pNome    = document.createElement('p')
    const pStatus  = document.createElement('p')
    const pGenero  = document.createElement('p')
    const pEspecie = document.createElement('p')

    div.id  = "cardRender2"

    h1.className       = "nome"
    h1.innerText       = personagem.name

    h2.className       = "status"
    h2.innerText       = personagem.status

    bg.className       = "bg"
    bg.src             = "../assets/bg dev.png"

    img.className      = "dev"
    img.src            = personagem.image

    pNome.className    = "nome1"
    pNome.innerText    = personagem.name

    pStatus.className  = "status1"
    pStatus.innerText  = personagem.status

    pGenero.className  = "genero"
    pGenero.innerText  = personagem.gender

    pEspecie.className = "especie"
    pEspecie.innerText = personagem.species

    div.append(h1, h2, bg, img, pNome, pStatus, pGenero,pEspecie)

    return div
}

renderPersonsPesquisa ()