// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterSpellsCharm = (obj) => {

  function filterByCharm(obj) {
    if ('spell_type' in obj && obj.spell_type === "Charm") {
      return true;
    }
  }
  return obj.filter(filterByCharm);
};

export const filterSpellsCurse = (obj) => {

  function filterByCurse(obj) {
    if ('spell_type' in obj && obj.spell_type === "Curse") {
      return true;
    }
  }
  return obj.filter(filterByCurse);
};

//hay que usar map y objkey porque es un json
export const sortSpells = (obj) => {

  return obj.sort().reverse();
};

