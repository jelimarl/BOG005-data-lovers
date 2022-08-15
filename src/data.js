
//export const example = () => {
//return 'example';
//};

//export const anotherExample = () => {
//return 'OMG';
//};

export const sortSpells = (obj, option) => {

  const compare = (a, b) => {

    const nameA = a.name;
    const nameB = b.name;

    nameA.localeCompare(nameB);
  }

  //if (a.name > b.name) {
  //return 1; a = pera b = kilo
  //}
  //if (a.name < b.name) {
  //return -1;
  //}
  //return 0;
  //}

  //return obj.sort(compare);
  //}

  if (option === "za") {
    return obj.sort(compare).reverse();
  }

  else {
    return obj.sort(compare);
  }

};

export const filterSpells = (obj, type) => {

  let objNoNull = obj.filter((obj) => obj.spell_type !== null)

  return objNoNull.filter((obj) => obj.spell_type.includes(type));
};

