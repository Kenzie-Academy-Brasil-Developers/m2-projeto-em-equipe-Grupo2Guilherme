export async function personaId (id) {

    const personagem = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const personagemJson = await personagem.json()

    return personagemJson
}

 
