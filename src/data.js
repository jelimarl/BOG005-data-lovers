
export const sortSpells = (obj, option) => {

  //Se crea función que compara elementos del objeto.
  const compare = (a, b) => {

    if (a.name > b.name) {
      return 1;
    }
    else {
      return -1;
    }
  }

  //Se aplica el método sort para ordenar.
  if (option === "za") {
    return obj.sort(compare).reverse();
  }

  else {
    return obj.sort(compare);
  }

};

export const filterSpells = (obj, type) => {

  //Se eliminan todos los elementos que contengan null
  let objNoNull = obj.filter((obj) => obj.spell_type !== null)

  //Se filtra la nueva data sin null
  return objNoNull.filter((obj) => obj.spell_type.includes(type));
};

//Función para calcular el porcentaje.
export const percentage = (obj1, obj2) => {
  let total = obj1.length;
  let spellTypeNumber = obj2.length;
  let spellPercentage = (spellTypeNumber * 100)/total;
  
  let result = Number(spellPercentage.toFixed(2));
  
return result;
};