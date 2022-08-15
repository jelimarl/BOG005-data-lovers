//import { example } from './data.js';

import { filterSpells } from './data.js';

import { sortSpells } from './data.js';

import data from './data/harrypotter/data.js';

const spells = data.spells;
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const spellsButton = document.getElementById("spellsButton");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
let spellsContainer = document.getElementById("spellsContainer");

function cards(obj) {
    let printSpells = "";

    for (let spell of obj) {

        if (obj.spell_type !== null) {
            printSpells += `<article class="card">
                <figure class="cardImage">
                    <img class="spellsPic" src="https://www.ecipic.com/material/img/cultura-y-ocio/38673_1605530324_hechizos-de-harry-potter-2.jpg"> 
                </figure>
                <article class="cardText">
                    <h4>${spell.name}</h4>
                    <h4>Type: ${spell.spell_type}</h4>
                </article>
                </article>`;
        }

        else {
            printSpells += `<article class= "card">
            <figure class="cardImage">
                <img class="spellsPic" src="https://www.ecipic.com/material/img/cultura-y-ocio/38673_1605530324_hechizos-de-harry-potter-2.jpg"> 
            </figure>
            <article class="cardText">
                <h4>${spell.name}</h4>
            </article>    
            </article>`;
        }
    }

    spellsContainer.innerHTML = printSpells;
}

function showSpells() {

    firstPage.style.display = "none";
    secondPage.style.display = "block";
    cards(spells);

}

spellsButton.addEventListener("click", showSpells)

function showSpellsByType() {

    firstPage.style.display = "none";
    secondPage.style.display = "block";
    let filterValue = filterSelect.value;
    let arrSpellsFiltered;

    arrSpellsFiltered = filterSpells(spells, filterValue);
    cards(arrSpellsFiltered);
}

filterSelect.addEventListener("click", showSpellsByType)

function showSpellsSorted() {

    firstPage.style.display = "none";
    secondPage.style.display = "block";
    let sortValue = sortSelect.value;
    let arrSpellsSorted;

    arrSpellsSorted = sortSpells(spells, sortValue);
    cards(arrSpellsSorted);
}

sortSelect.addEventListener("click", showSpellsSorted)

//console.log(example, data);


