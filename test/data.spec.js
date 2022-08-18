//Se importan las funciones.
import { percentage } from '../src/data.js';
import { filterSpells } from '../src/data.js';
import { sortSpells } from '../src/data.js';

//Se elige la data para los test.
const data1 = [
  {
    "id": 1,
    "name": "Aberto",
    "other_name": null,
    "pronunciation": "Ah-bare-toh",
    "spell_type": "Charm",
    "description": null,
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 2,
    "name": "Accio",
    "other_name": "Summoning Charm",
    "pronunciation": "Various, including: AK-ee-oh or AK-see-oh , AK-see-oh , AS-see-oh (US), and AT-chee-oh (Anglo-Catholic pronunciation)",
    "spell_type": "Charm",
    "description": "Summons an object towards the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is casted nonverbally). This spell needs thought behind it, and the object must be clear in the casters mind before trying to summon it. The caster doesn't necessarily need to know the location of the target if they say the name of the object to be summoned, such as when Hermione Granger summoned some books from Dumbledore's office simply by saying \"Accio Horcrux books!\" while in Gryffindor Tower.",
    "mention": "Harry Potter summoned his broom to complete the first task of the Triwizard Tournament in 1994, and to summon the Portkey to escape Voldemort and the Death Eaters in the Little Hangleton Graveyard in 1995. Also, in the Battle of the Seven Potters Harry summoned Hagrid when he fell. Molly Weasley used it to get the twins' candy. The twins used it to summon their brooms from Dolores Umbridge's office",
    "etymology": "The Latin word accio means \"I call\" or \"I summon\".",
    "note": null
  },
  {
    "id": 3,
    "name": "Age Line",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Charm",
    "description": "Prevents people above or below a certain age from access to a target.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 4,
    "name": "Aguamenti",
    "other_name": "Water-Making Spell",
    "pronunciation": "AH-gwah-MEN-tee",
    "spell_type": "Charm, Conjuration",
    "description": "Produces a clean, drinkable jet of water from the wand tip.",
    "mention": "Used by Fleur Delacour in 1994 to extinguish her skirt, which had caught flame during a fight against a dragon. Harry used this spell twice in 1997, both on the same night; once to attempt to provide a drink for Dumbledore, then again to help douse Hagrid's hut after it was set aflame by Thorfinn Rowle, who used the Fire-Making Spell.",
    "etymology": null,
    "note": null
  },
  {
    "id": 5,
    "name": "Alarte Ascendare",
    "other_name": null,
    "pronunciation": "a-LAR-tay a-SEN-der-ay",
    "spell_type": "Charm",
    "description": "Shoots the target high into the air.",
    "mention": "Used by Gilderoy Lockhart in 1992 to send a snake high into the air during the first and last meeting of the Duelling Club.",
    "etymology": null,
    "note": null
  },
  {
    "id": 6,
    "name": "Albus Dumbledore's forceful spell",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Spell",
    "description": "This spell was, supposedly, quite powerful as when it was cast, the opponent was forced to conjure a silver shield to deflect it.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 7,
    "name": "Alohomora",
    "other_name": "Unlocking Charm",
    "pronunciation": "ah-LOH-ho-MOR-ah",
    "spell_type": "Charm",
    "description": "Unlocks doors and other objects. It can also unlock doors that have been sealed with a Locking Spell, although it is possible to bewitch doors to become unaffected by this spell.",
    "mention": "Used by Hermione Granger in 1991 to allow her and her friends to access the Third-floor corridor at her school, which was at the time forbidden; she used it again two years later to free Sirius's cell in her teacher's prison room.",
    "etymology": null,
    "note": null
  },
  {
    "id": 8,
    "name": "Amato Animo Animato Animagus",
    "other_name": "Animagus Spell",
    "pronunciation": "ah-MAH-toh ah-NEE-moh ah-nee-MAH-toh an-a-MAY-jus",
    "spell_type": "Transfiguration",
    "description": "Spell used as part of the process of becoming an Animagus. The incantation has to be recited at sunrise and sundown, every day before the consumption of the Animagus Potion. The incantation is also recited just prior to the consumption of the potion, which has to take place just after a lightning storm starts. The incantation is recited while placing the wand's tip over one's heart.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 9,
    "name": "Anapneo",
    "other_name": null,
    "pronunciation": "ah-NAP-nee-oh",
    "spell_type": "Healing Spell, Vanishment",
    "description": "Clears the target's airway if they are choking on something.",
    "mention": "Used by Horace Slughorn, cast upon Marcus Belby when the latter choked on a pheasant in 1996.",
    "etymology": null,
    "note": null
  },
  {
    "id": 10,
    "name": "Anteoculatia",
    "other_name": null,
    "pronunciation": "an-tee-oh-kyoo-LAY-chee-ah",
    "spell_type": "Hex",
    "description": "Causes the target to grow antlers.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 182,
    "name": "Meteolojinx Recanto",
    "other_name": null,
    "pronunciation": "mee-tee-OH-loh-jinks reh-CAN-toh.",
    "spell_type": "Counter-Charm",
    "description": "Causes weather effects caused by jinxes to cease.",
    "mention": "Suggested in 1997 by Arthur Weasley to Ron (disguised as Reginald Cattermole by use of Polyjuice Potion) as the best way to clear up the rain jinx on a Ministry office. Also used by Bartemius Crouch Jr (Disguised as Alastor Moody) In 1994 to cease the weather effect of the Great Hall's Ceiling insisting it is broken as he told Dumbledore to \"Fix his ceiling\".",
    "etymology": "Meteorology, the study of weather, the word jinx and recant, \"to withdraw or retract\". Interestingly in modern English recant means to say that you no longer hold a belief.",
    "note": null
  },
  {
    "id": 189,
    "name": "Morsmordre",
    "other_name": null,
    "pronunciation": "morz-MOR-druh",
    "spell_type": null,
    "description": "Conjures the Dark Mark, which is the sign of the Death Eaters.",
    "mention": "Used by Barty Crouch Jr in 1994. Also seen in 1997 over the castle to lure Albus Dumbledore to his death. It was apparently invented by Lord Voldemort.",
    "etymology": "Latin mors, \"death\", and mordere, meaning \"to bite\" (or its French derivative mordre); this would appear to be associated with the name of Lord Voldemort's followers, the Death Eaters. The English murder might also contribute.",
    "note": "A possible translation might be \"take a bite out of death\", a fitting phrase for Death Eaters."
  }
];

//Data ordenada de Z-A
const data2 = [
  {
    "id": 189,
    "name": "Morsmordre",
    "other_name": null,
    "pronunciation": "morz-MOR-druh",
    "spell_type": null,
    "description": "Conjures the Dark Mark, which is the sign of the Death Eaters.",
    "mention": "Used by Barty Crouch Jr in 1994. Also seen in 1997 over the castle to lure Albus Dumbledore to his death. It was apparently invented by Lord Voldemort.",
    "etymology": "Latin mors, \"death\", and mordere, meaning \"to bite\" (or its French derivative mordre); this would appear to be associated with the name of Lord Voldemort's followers, the Death Eaters. The English murder might also contribute.",
    "note": "A possible translation might be \"take a bite out of death\", a fitting phrase for Death Eaters."
  },
  {
    "id": 182,
    "name": "Meteolojinx Recanto",
    "other_name": null,
    "pronunciation": "mee-tee-OH-loh-jinks reh-CAN-toh.",
    "spell_type": "Counter-Charm",
    "description": "Causes weather effects caused by jinxes to cease.",
    "mention": "Suggested in 1997 by Arthur Weasley to Ron (disguised as Reginald Cattermole by use of Polyjuice Potion) as the best way to clear up the rain jinx on a Ministry office. Also used by Bartemius Crouch Jr (Disguised as Alastor Moody) In 1994 to cease the weather effect of the Great Hall's Ceiling insisting it is broken as he told Dumbledore to \"Fix his ceiling\".",
    "etymology": "Meteorology, the study of weather, the word jinx and recant, \"to withdraw or retract\". Interestingly in modern English recant means to say that you no longer hold a belief.",
    "note": null
  },
  {
    "id": 10,
    "name": "Anteoculatia",
    "other_name": null,
    "pronunciation": "an-tee-oh-kyoo-LAY-chee-ah",
    "spell_type": "Hex",
    "description": "Causes the target to grow antlers.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 9,
    "name": "Anapneo",
    "other_name": null,
    "pronunciation": "ah-NAP-nee-oh",
    "spell_type": "Healing Spell, Vanishment",
    "description": "Clears the target's airway if they are choking on something.",
    "mention": "Used by Horace Slughorn, cast upon Marcus Belby when the latter choked on a pheasant in 1996.",
    "etymology": null,
    "note": null
  },
  {
    "id": 8,
    "name": "Amato Animo Animato Animagus",
    "other_name": "Animagus Spell",
    "pronunciation": "ah-MAH-toh ah-NEE-moh ah-nee-MAH-toh an-a-MAY-jus",
    "spell_type": "Transfiguration",
    "description": "Spell used as part of the process of becoming an Animagus. The incantation has to be recited at sunrise and sundown, every day before the consumption of the Animagus Potion. The incantation is also recited just prior to the consumption of the potion, which has to take place just after a lightning storm starts. The incantation is recited while placing the wand's tip over one's heart.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 7,
    "name": "Alohomora",
    "other_name": "Unlocking Charm",
    "pronunciation": "ah-LOH-ho-MOR-ah",
    "spell_type": "Charm",
    "description": "Unlocks doors and other objects. It can also unlock doors that have been sealed with a Locking Spell, although it is possible to bewitch doors to become unaffected by this spell.",
    "mention": "Used by Hermione Granger in 1991 to allow her and her friends to access the Third-floor corridor at her school, which was at the time forbidden; she used it again two years later to free Sirius's cell in her teacher's prison room.",
    "etymology": null,
    "note": null
  },
  {
    "id": 6,
    "name": "Albus Dumbledore's forceful spell",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Spell",
    "description": "This spell was, supposedly, quite powerful as when it was cast, the opponent was forced to conjure a silver shield to deflect it.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 5,
    "name": "Alarte Ascendare",
    "other_name": null,
    "pronunciation": "a-LAR-tay a-SEN-der-ay",
    "spell_type": "Charm",
    "description": "Shoots the target high into the air.",
    "mention": "Used by Gilderoy Lockhart in 1992 to send a snake high into the air during the first and last meeting of the Duelling Club.",
    "etymology": null,
    "note": null
  },
  {
    "id": 4,
    "name": "Aguamenti",
    "other_name": "Water-Making Spell",
    "pronunciation": "AH-gwah-MEN-tee",
    "spell_type": "Charm, Conjuration",
    "description": "Produces a clean, drinkable jet of water from the wand tip.",
    "mention": "Used by Fleur Delacour in 1994 to extinguish her skirt, which had caught flame during a fight against a dragon. Harry used this spell twice in 1997, both on the same night; once to attempt to provide a drink for Dumbledore, then again to help douse Hagrid's hut after it was set aflame by Thorfinn Rowle, who used the Fire-Making Spell.",
    "etymology": null,
    "note": null
  },
  {
    "id": 3,
    "name": "Age Line",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Charm",
    "description": "Prevents people above or below a certain age from access to a target.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 2,
    "name": "Accio",
    "other_name": "Summoning Charm",
    "pronunciation": "Various, including: AK-ee-oh or AK-see-oh , AK-see-oh , AS-see-oh (US), and AT-chee-oh (Anglo-Catholic pronunciation)",
    "spell_type": "Charm",
    "description": "Summons an object towards the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is casted nonverbally). This spell needs thought behind it, and the object must be clear in the casters mind before trying to summon it. The caster doesn't necessarily need to know the location of the target if they say the name of the object to be summoned, such as when Hermione Granger summoned some books from Dumbledore's office simply by saying \"Accio Horcrux books!\" while in Gryffindor Tower.",
    "mention": "Harry Potter summoned his broom to complete the first task of the Triwizard Tournament in 1994, and to summon the Portkey to escape Voldemort and the Death Eaters in the Little Hangleton Graveyard in 1995. Also, in the Battle of the Seven Potters Harry summoned Hagrid when he fell. Molly Weasley used it to get the twins' candy. The twins used it to summon their brooms from Dolores Umbridge's office",
    "etymology": "The Latin word accio means \"I call\" or \"I summon\".",
    "note": null
  },
  {
    "id": 1,
    "name": "Aberto",
    "other_name": null,
    "pronunciation": "Ah-bare-toh",
    "spell_type": "Charm",
    "description": null,
    "mention": null,
    "etymology": null,
    "note": null
  }
];

//Data filtrada respecto a "Charm"
const filterOutput1 = [
  {
    "id": 1,
    "name": "Aberto",
    "other_name": null,
    "pronunciation": "Ah-bare-toh",
    "spell_type": "Charm",
    "description": null,
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 2,
    "name": "Accio",
    "other_name": "Summoning Charm",
    "pronunciation": "Various, including: AK-ee-oh or AK-see-oh , AK-see-oh , AS-see-oh (US), and AT-chee-oh (Anglo-Catholic pronunciation)",
    "spell_type": "Charm",
    "description": "Summons an object towards the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is casted nonverbally). This spell needs thought behind it, and the object must be clear in the casters mind before trying to summon it. The caster doesn't necessarily need to know the location of the target if they say the name of the object to be summoned, such as when Hermione Granger summoned some books from Dumbledore's office simply by saying \"Accio Horcrux books!\" while in Gryffindor Tower.",
    "mention": "Harry Potter summoned his broom to complete the first task of the Triwizard Tournament in 1994, and to summon the Portkey to escape Voldemort and the Death Eaters in the Little Hangleton Graveyard in 1995. Also, in the Battle of the Seven Potters Harry summoned Hagrid when he fell. Molly Weasley used it to get the twins' candy. The twins used it to summon their brooms from Dolores Umbridge's office",
    "etymology": "The Latin word accio means \"I call\" or \"I summon\".",
    "note": null
  },
  {
    "id": 3,
    "name": "Age Line",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Charm",
    "description": "Prevents people above or below a certain age from access to a target.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 4,
    "name": "Aguamenti",
    "other_name": "Water-Making Spell",
    "pronunciation": "AH-gwah-MEN-tee",
    "spell_type": "Charm, Conjuration",
    "description": "Produces a clean, drinkable jet of water from the wand tip.",
    "mention": "Used by Fleur Delacour in 1994 to extinguish her skirt, which had caught flame during a fight against a dragon. Harry used this spell twice in 1997, both on the same night; once to attempt to provide a drink for Dumbledore, then again to help douse Hagrid's hut after it was set aflame by Thorfinn Rowle, who used the Fire-Making Spell.",
    "etymology": null,
    "note": null
  },
  {
    "id": 5,
    "name": "Alarte Ascendare",
    "other_name": null,
    "pronunciation": "a-LAR-tay a-SEN-der-ay",
    "spell_type": "Charm",
    "description": "Shoots the target high into the air.",
    "mention": "Used by Gilderoy Lockhart in 1992 to send a snake high into the air during the first and last meeting of the Duelling Club.",
    "etymology": null,
    "note": null
  },
  {
    "id": 7,
    "name": "Alohomora",
    "other_name": "Unlocking Charm",
    "pronunciation": "ah-LOH-ho-MOR-ah",
    "spell_type": "Charm",
    "description": "Unlocks doors and other objects. It can also unlock doors that have been sealed with a Locking Spell, although it is possible to bewitch doors to become unaffected by this spell.",
    "mention": "Used by Hermione Granger in 1991 to allow her and her friends to access the Third-floor corridor at her school, which was at the time forbidden; she used it again two years later to free Sirius's cell in her teacher's prison room.",
    "etymology": null,
    "note": null
  },
  {
    "id": 182,
    "name": "Meteolojinx Recanto",
    "other_name": null,
    "pronunciation": "mee-tee-OH-loh-jinks reh-CAN-toh.",
    "spell_type": "Counter-Charm",
    "description": "Causes weather effects caused by jinxes to cease.",
    "mention": "Suggested in 1997 by Arthur Weasley to Ron (disguised as Reginald Cattermole by use of Polyjuice Potion) as the best way to clear up the rain jinx on a Ministry office. Also used by Bartemius Crouch Jr (Disguised as Alastor Moody) In 1994 to cease the weather effect of the Great Hall's Ceiling insisting it is broken as he told Dumbledore to \"Fix his ceiling\".",
    "etymology": "Meteorology, the study of weather, the word jinx and recant, \"to withdraw or retract\". Interestingly in modern English recant means to say that you no longer hold a belief.",
    "note": null
  }
];

//Se crean las funciones que realizan el test
describe('filterSpells', () => {
  it('is a function', () => {
    expect(typeof filterSpells).toBe('function');
  });

  it('returns output', () => {
    expect(filterSpells(data1, "Charm")).toStrictEqual(filterOutput1);
  });

  it('returns output', () => {
    expect(filterSpells(data1, "Jinx")).toStrictEqual([]);
  });

  it('returns output', () => {
    expect(filterSpells([], "Jinx")).toStrictEqual([]);
  });
});

describe('sortSpells', () => {
  it('is a function', () => {
    expect(typeof sortSpells).toBe('function');
  });

  it('returns output', () => {
    expect(sortSpells(data1, "az")).toStrictEqual(data1);
  });

  it('returns output', () => {
    expect(sortSpells(data2, "az")).toStrictEqual(data1);
  });

  it('returns output', () => {
    expect(sortSpells(data2, "za")).toStrictEqual(data2);
  });

  it('returns output', () => {
    expect(sortSpells(data1, "za")).toStrictEqual(data2);
  });

  it('returns output', () => {
    expect(sortSpells([], "za")).toStrictEqual([]);
  });
});

describe('percentage', () => {
  it('is a function', () => {
    expect(typeof percentage).toBe('function');
  });

  it('returns output', () => {
    expect(percentage(data1, filterOutput1)).toStrictEqual(58.33);
  });

  it('returns output', () => {
    expect(percentage(data1, [])).toStrictEqual(0);
  });
});
