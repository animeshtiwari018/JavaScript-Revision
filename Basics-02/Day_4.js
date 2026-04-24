const DC_hero = ["superman", "flash", "batman"];
const Marvel_hero = ["thor", "irconman", "spiderman"];

// console.log(DC_hero);
// console.log(DC_hero.push(Marvel_hero));


// ***This is not the right way to add two array
// DC_hero.push(Marvel_hero);
// console.log(DC_hero);


// DC_hero.concat(Marvel_hero);
// console.log(DC_hero);


// **This is the right way to store two or more array in one using spread method
// const new_arr = [...DC_hero, ...Marvel_hero];
// console.log(new_arr);


// ***Basically this is used to fix the mixed arr in one 
// note :- it is use to fix nested array which flat the nested array in better structure 
const another_array = [1, 2, 3, [4, 5, 6, 7],8,9,0];
const real_another_array = another_array.flat(2);
console.log(real_another_array);