function covertPokemonToLi(pokemon) {
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

pokeApi.getPokemons().then((pokemonList = []) => {

    // substituindo o html antigo para o html novo
    pokemonOl.innerHTML += pokemonList.map(covertPokemonToLi).join('');
});