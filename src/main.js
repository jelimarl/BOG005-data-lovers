import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

import { filterSpellsCharm } from './data.js';


import data from './data/harrypotter/data.js';

let spellsContainer = document.getElementById("spellsContainer");
var spells = data.spells;
console.log(spells);

for (let spell of spells) {
    console.log(spell);

    const p = document.createElement("p");
    const article = document.createElement("article");
    p.innerText = spell.name;
    article.appendChild(p);
    spellsContainer.append(article);

}

//console.log(spells[3]['name']);



var arrSpellsCharm = spells.filter(filterSpellsCharm);
console.log(arrSpellsCharm[0]['name']); 

console.log(example, data);
