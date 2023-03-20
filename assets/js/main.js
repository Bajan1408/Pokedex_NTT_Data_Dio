const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const loadLessButton = document.getElementById('loadLessButton');
let offset = 0;
let limit = 10;
const maxRecords = 151;


function convertPokemonToLi(pokemon){
  let zeroBeforeNumber;
  if(pokemon.number < 10){
    zeroBeforeNumber = '#00' + pokemon.number;
  } else if(pokemon.number >= 10 && pokemon.number < 100){
     zeroBeforeNumber = '#0' + pokemon.number;
  } else {
     zeroBeforeNumber = '#' + pokemon.number;
  }

   return `<a class="linkBig" href="./bigPokemon.html?id=${pokemon.number}">
   <li class="pokemon ${pokemon.type}">
   <span class="number">${zeroBeforeNumber}</span>
   <span class="name">${pokemon.name}</span>
   
   <div class="detail">
     <ol class="types">
       <!--<li class="type">grass</li>
       <li class="type">poison</li> -->
       ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>` ).join('')}
     </ol>

    <!-- <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
     alt="${pokemon.name}"> -->

    <img src="${pokemon.photo}" 
    alt="${pokemon.name}">
   </div>    
 </li>
   `
}

   
function loadPokemonItems(offset, limit){
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {    
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
  })
.catch((error) => console.log(`Este foi o meu erro: ${error}`))
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  console.log('ofset + limit dentro do loadmorebutton valor ', offset + limit);
  if((offset + limit) >= maxRecords){
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);
    loadMoreButton.parentNode.removeChild(loadMoreButton);
  } 
  else {
    loadPokemonItems(offset, limit);
     }
  })

 loadLessButton.addEventListener('click', () => {
    //if((offset + limit) > 10){
      offset -= 10;
      limit = 0;
      console.log('Diminui 10 pokemons');
      loadPokemonItems(offset, limit);
    //loadLessButton.parentNode.removeChild(loadLessButton);
    //} else {
    //document.getElementById('loadLessButton').remove();
    //loadLessButton.parentNode.removeChild(loadLessButton);
    //console.log('Removi o botão less');
   //}
  })

  console.log('total = ', offset + limit);
  
 
