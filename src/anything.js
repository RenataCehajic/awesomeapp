// const res = ["Eszter", "Violeta", "Rein", "Danny"].map((name) => {
//   return name.length;
// });

// console.log(res);

// const pokemons = [
//   { name: "Charizard" },
//   { name: "Mewtwo" },
//   { name: "Mega beedrill" },
// ];

// const res = pokemons.map((pokemon) => {
//   return pokemon.name;
// });

// console.log(res);
// console.log(pokemons);

// const pokemons = [
//   { name: "Charizard", weight: 90 },
//   { name: "Bulbasaur", weight: 6.9 },
//   { name: "Mewtwo", weight: 122 },
//   { name: "Mega beedrill", weight: 65 },
// ];

// const res = pokemons.map((pokemon) => {
//   return `${pokemon.name}: ${pokemon.weight} kg`;
// });

// console.log(res);

// function getArraySum(ability) {
//   let total = 0;
//   for (let i in ability) {
//     total += ParseInt(ability[i]);
//   }
//   return total;
// }

// const abilities = ["Blaze", "Solar power", "Tough claws", "Drought"];
// const totalAbilities = getArraySum(abilities);

// console.log(totalAbilities);

// function getArraySum(a) {
//   var total = 0;
//   for (var i in a) {
//     total += a[i];
//   }
//   return total;
// }

// var payChecks = [123, 155, 134, 205, 105];
// var weeklyPay = getArraySum(payChecks); //sums up to 722

// console.log(weeklyPay);

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

console.log(all_pokemon);
