import { example } from './data.js';

import { filterSpellsCharm } from './data.js';


import data from './data/harrypotter/data.js';

const spellsButton = document.getElementById("spellsButton")
let spells = data.spells;

function showSpells(){
    firstPage.style.display = "none";
    secondPage.style.display = "block";

   
    for (let spell of spells) {
       // console.log(spell);
    
        const p = document.createElement("p");
        const article = document.createElement("article");
        p.innerText = spell.name;
        article.appendChild(p);
        spellsContainer.append(article);
    
    }

}


spellsButton.addEventListener("click",showSpells)



let spellsContainer = document.getElementById("spellsContainer");
let spellsContainerCharm = document.getElementById("spellsContainerCharm");

//console.log(spells);

const filterButton = document.getElementById("filterButton");

function showSpellsCharm(){
    var arrSpellsCharm = spells.filter(filterSpellsCharm);

    thirdPage.style.display = "block";
    firstPage.style.display = "none";
    secondPage.style.display = "none";

    for (let spell of arrSpellsCharm) {
        console.log(spell);
    
        const p = document.createElement("p");
        const article = document.createElement("article");
        p.innerText = spell.name;
        article.appendChild(p);
        spellsContainerCharm.append(article);
    
    }

}



//console.log(spells[3]['name']);





filterButton.addEventListener("click",showSpellsCharm);

//console.log(arrSpellsCharm[0]['name']); 

//console.log(example, data);
