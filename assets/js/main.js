const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function covertPokemonToLi(pokemon) 
{
    return `
        <li class="pokemon">

            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">
            </div>
        </li>
    
    `;
}

const pokemonOl = document.getElementById('pokemonList');

fetch(url)
    // Quando dar um GET na url, tenha a promessa de receber o body e transformá-lo em JSON.
    // Sempre o que vai para o retorno do 1º then é o return do fetch.
    .then((response) => response.json())
    // Recebendo o body convertido. Sempre o que vai pro retorno do 2º Then é o return do 1º
    // No segundo then temos a capacidade de manipular o JSON de resposta.
    .then((jsonBody) => jsonBody.results)
    // Aqui jsonBody.results vira "pokemonList" 
    .then((pokemonList) => {
        for(let i = 0; i < pokemonList.length; i++)
        {
            const pokemon = pokemonList[i];
            pokemonOl.innerHTML += covertPokemonToLi(pokemon);
        }

    })
    .catch((error) => console.error(error))
    .finally(() => console.log("Requisição concluída"));