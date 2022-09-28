let student = [];
let colors = ['red' , 'orange' , 'yellow'];
let lottoNums = [19,22,56,12,51];
let stuff = [true, 68, 'cat',null];

//console.log(colors[2]);
//console.log(colors[colors.length - 1]);

let shoppingList = ['cheddar cheese', '2% milk'];

shoppingList[1] = 'Whole Milk';
//shoppingList[0][1] = 'd';
//console.log(shoppingList);
shoppingList[shoppingList.length] = 'Cereal';
//console.log(shoppingList);


let animals = ['pigs', 'sheeps','donkeys'];
//console.log(animals);
animals.push('cows');               // add the element to the end of the array.
//console.log(animals);

let state = false;

animals.pop();
//console.log(animals);


let name = "Mohamed Halbouni";

function reverse(str)
{
    let strTemp = "";
    for(let i = str.length-1; i >= 0; i--)
    {
        strTemp += str[i];
    }
    return strTemp;
}

//console.log(reverse(name));


/* ========== ARRAY METHODS ========== */
let players = ["Messi", "Ronaldo" , "Neymar"];
let players2 = ["Haland", "Salah", "Pique"];

let strpl = players.concat(players2);                       // using concat.
//console.log(players);
//console.log(strpl);

//console.log(players.includes("Messi"));                     // using include. and return true or false only.

//console.log(players.reverse());                             // using reverse




















