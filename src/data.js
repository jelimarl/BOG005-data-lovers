// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterSpellsCharm = (obj) => {
  
  //var bookTitle = "Harry Potter and the Sorcerer's Stone";
  if ('spell_type' in obj && obj.spell_type === "Charm" ) {
    return true;
  }
};

