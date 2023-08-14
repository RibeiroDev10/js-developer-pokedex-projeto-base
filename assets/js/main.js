function convertPokemonTypesToLi(pokemonTypes)
{
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function covertPokemonToLi(pokemon) 
{
    return `
        <li class="pokemon">

            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type => `<li class="type">${type}</li>`))}
                </ol>

                <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
            </div>
        </li>
    
    `;
}

const pokemonOl = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemonList = []) => {

    // substituindo o html antigo para o html novo
    pokemonOl.innerHTML += pokemonList.map(covertPokemonToLi).join('');
});