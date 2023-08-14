const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail)
{
    const pokemonModel = new Pokemon();
    pokemonModel.name = pokeDetail.name;
    pokemonModel.number = pokeDetail.number;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;

    pokemonModel.types = types;
    pokemonModel.type = type;
    pokemonModel.photo = pokeDetail.sprites.other.dream_world.front_default;

    return ;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemon) => {
                
            })
}

    // Função que abstrai o consumo do HTTP
pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
        // Quando dar um GET na url, tenha a promessa de receber o body e transformá-lo em JSON.
        // Sempre o que vai para o retorno do 1º then é o return do fetch.
        .then((response) => response.json())
        // Recebendo o body convertido. Sempre o que vai pro retorno do 2º Then é o return do 1º
        // No segundo then temos a capacidade de manipular o JSON de resposta.
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
    console.log(results);
});