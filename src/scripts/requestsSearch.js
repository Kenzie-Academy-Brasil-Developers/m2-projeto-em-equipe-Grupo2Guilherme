// export async function t  ) {
//     const persons = await fetch(`https://rickandmortyapi.com/api/character/`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     } )
    
//     const personsJson = await persons.json()
    
//     return personsJson
// }

export async function personagemAPI(name) {
    const person = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    } )
    
    const personJson = await person.json()

    
    
    return personJson
}