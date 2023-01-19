export async function todosPersonagens () {

    const allCharacters = await fetch(`https://rickandmortyapi.com/api/character`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const allCharactersJson = await allCharacters.json()

    return allCharactersJson

}

 
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

 
