import { example } from './data.js';

import { filterSpells } from './data.js';

import { sortSpells } from './data.js';

import data from './data/harrypotter/data.js';

const spells = data.spells;
const spellsButton = document.getElementById("spellsButton");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
let spellsContainer = document.getElementById("spellsContainer");

function showSpells() {

    firstPage.style.display = "none";
    secondPage.style.display = "block";
    let printSpells = "";

    for (let spell of spells) {

        printSpells += `<article>
        <h3>${spell.name}</h3>
        <p></p>
        </article>`;
        spellsContainer.innerHTML = printSpells;
    }
}

spellsButton.addEventListener("click", showSpells)

function showSpellsByType() {

    firstPage.style.display = "none";
    secondPage.style.display = "block";
    let filterValue = filterSelect.value;
    let arrSpellsFiltered;
    let printSpells = "";

    switch (true) {
        case (filterValue === "Charm"):
            arrSpellsFiltered = filterSpells(spells, "Charm");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;

        case (filterValue === "Curse"):
            arrSpellsFiltered = filterSpells(spells, "Curse");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;

        case (filterValue === "Conjuration"):
            arrSpellsFiltered = filterSpells(spells, "Conjuration");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;

        case (filterValue === "Transfiguration"):
            arrSpellsFiltered = filterSpells(spells, "Transfiguration");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;

        case (filterValue === "Hex"):
            arrSpellsFiltered = filterSpells(spells, "Hex");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;

        case (filterValue === "Jinx"):
            arrSpellsFiltered = filterSpells(spells, "Jinx");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;

        case (filterValue === "Transportation"):
            arrSpellsFiltered = filterSpells(spells, "Transportation");

            for (let spell of arrSpellsFiltered) {

                printSpells += `<article>
                <h3>${spell.name}</h3>
                <p></p>
                </article>`;
                spellsContainer.innerHTML = printSpells;
            };
            break;



    }
}

filterSelect.addEventListener("click", showSpellsByType)

//console.log(arrSpellsCharm[0]['name']); 

function showSpellsSort() {

    const arrSpellsSort = sortSpells(spells);
    let printSpells = "";
    firstPage.style.display = "none";
    secondPage.style.display = "block";

    for (let spell of arrSpellsSort) {

        printSpells += `<article>
        <h3>${spell.name}</h3>
        <p></p>
        </article>`;
        spellsContainer.innerHTML = printSpells
    }
}

//console.log(example, data);
