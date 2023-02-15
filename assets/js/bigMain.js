const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

let zeroPostId;
if(postId < 10){
   zeroPostId = '#00' + postId;
} else if(postId >= 10 && postId < 100){
   zeroPostId = '#0' + postId;
} else {
   zeroPostId = '#' + postId;
}

const url = `https://pokeapi.co/api/v2/pokemon`;
const url2 = `https://pokeapi.co/api/v2/pokemon/${postId}`;

async function getPokeDetail() {
    const response = await fetch(url2);
    console.log(response);

    const data = await response.json();
    console.log(data); 
  
    const divGeral = document.getElementById('card-big');

    const sectionGeral = document.createElement('section');
    sectionGeral.setAttribute('id', 'detalhe_pokemon_grande');
    sectionGeral.classList.add('detalhe_pokemon_grande');
    sectionGeral.classList.add(`${data.types[0].type.name}`);

    const div1 = document.createElement('div');
    div1.setAttribute('id', 'bigDetalhe');
    div1.classList.add('container');
    
    const div2 = document.createElement('div');
    div2.classList.add('detalhe');
       const span1 = document.createElement('span');
       span1.classList.add('big-name');
       span1.innerText = data.name;
       
       const span2 = document.createElement('span');
       span2.classList.add('big-number');
       span2.innerText = zeroPostId;
       
    const div3 = document.createElement('div');
    div3.classList.add('img-Types');

    const div4 = document.createElement('div');
    div4.classList.add('typesBig');

       const liType1 = document.createElement('li');
       liType1.classList.add('typeBig1', `${data.types[0].type.name}`);
       liType1.innerText = `${data.types[0].type.name}`;
   
       const liType2 = document.createElement('li');
   
       if(data.types.length > 1) {
       liType2.classList.add('typeBig1', `${data.types[1].type.name}`);
       liType2.innerText = `${data.types[1].type.name}`;
        }
       
       const liType3 = document.createElement('li');
       liType3.classList.add('typeBig2');
       liType3.innerText = `Height: ${data.height}`;
       
       const liType4 = document.createElement('li');
       liType4.classList.add('typeBig3');
       liType4.innerText = `Weight: ${data.weight}`;

    const img = document.createElement('img');
    img.setAttribute('src', data.sprites.other.dream_world.front_default);
    img.classList.add('big-img');

    const div5 = document.createElement('div');
    div5.classList.add('footer');

    const div6 = document.createElement('div');
    div6.classList.add('abilities');
       const h3ability = document.createElement('h3');
       h3ability.innerText = 'Abilities';

       const liAbil1 = document.createElement('li');

       if(data.abilities.length > 0) {
       liAbil1.classList.add('ability1');
       liAbil1.innerText = data.abilities[0].ability.name;
       }
       const liAbil2 = document.createElement('li');
   
       if(data.abilities.length > 1) {
       liAbil2.classList.add('ability2');
       liAbil2.innerText = data.abilities[1].ability.name;
       }
       const liAbil3 = document.createElement('li');
   
       if(data.abilities.length > 2) {
       liAbil3.classList.add('ability3');
       liAbil3.innerText = data.abilities[2].ability.name;
        }

    const div7 = document.createElement('div');
    div7.classList.add('moves-div');
       const h3moves = document.createElement('h3');
       h3moves.innerText = 'Three first moves';
       const moves1 = document.createElement('li');
       moves1.classList.add('moves1');
       moves1.innerText = data.moves[0].move.name;
  
       const moves2 = document.createElement('li');
       moves2.classList.add('moves2');
       moves2.innerText = data.moves[1].move.name;
  
       const moves3 = document.createElement('li');
       moves3.classList.add('moves3');
       moves3.innerText = data.moves[2].move.name;

    const div8 = document.createElement('div');
    div8.classList.add('btnDiv');
    
    const linkVoltar = document.createElement('a');
    linkVoltar.setAttribute('href', 'index.html');

    const button = document.createElement('button');
    button.classList.add('btnBig');
    button.innerText = 'Voltar';

    
    divGeral.appendChild(sectionGeral);
    sectionGeral.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(span1);
    div2.appendChild(span2);
    sectionGeral.appendChild(div3);
    div3.appendChild(div4);
    
       div4.appendChild(liType1);
   
       if(data.types.length > 1){
         div4.appendChild(liType2);
        } 
       
       div4.appendChild(liType3);
       div4.appendChild(liType4);

    div3.appendChild(img);

    sectionGeral.appendChild(div5);
    div5.appendChild(div6);
    div6.appendChild(h3ability);
    
       if(data.abilities.length > 0) {
       div6.appendChild(liAbil1);
        }
   
       if(data.abilities.length > 1) {
       div6.appendChild(liAbil2);
        }
   
       if(data.abilities.length > 2) {
       div6.appendChild(liAbil3);
        }
    
    div5.appendChild(div7);
    div7.appendChild(h3moves);
       div7.appendChild(moves1);
       div7.appendChild(moves2);
       div7.appendChild(moves3);

    divGeral.appendChild(div8);
    div8.appendChild(linkVoltar);
    linkVoltar.appendChild(button);
   
}

getPokeDetail();


