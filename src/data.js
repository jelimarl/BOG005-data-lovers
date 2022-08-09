// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//hay que usar map y objkey porque es un json
export const sortSpells = (obj) => {

  return obj.sort().reverse();
};

export const filterSpells = (obj, type) => {

  return obj.filter((obj) => obj.spell_type === type)

};

