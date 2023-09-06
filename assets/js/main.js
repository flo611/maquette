// PASCAL CASE -> FirstLetter
// CAMEL CASE -> firstLetter
// KEBAB CASE -> first-letter
// SNAKE CASE -> first_letter

//import SendToConsole from "./send.js";
//SendToConsole("Sekou", "Meaux");

//import { Add, Soustract, Multiply, Divide } from "./operation/operation.js";
//Add(1, 1);
//Soustract(10, 5);
//Multiply(3, 3);
//Divide(100, 2);

//const Scope = () => {
// let myScope = 1;
//console.log(myScope);
// if (myScope === 1) {
//  let secondScope = 2;
//console.log(secondScope);
// }
//};
// Scope();

//const Array = () => {
//let body = document.getElementById("body");
//let student = ["Chloé", "Bollo", "Florian"];
//let newStudent = "Sekou";
//console.log(student[0]); // Récupérer l'index du tableau
//student.push("Lucas"); // Ajoute un élément au tableau
//console.log(student);
// student.pop();
//console.log(student);
//student.push(newStudent);
// console.log(student);

//student.map((stud) => {
// let element = document.createElement("p");
// element.innerHTML = `Je m'apelle ${stud}`;
// body.append(element);
// console.log(`Je m'apelle ${stud}`);
//});
//};
// Array();

//let obj = {
//key: "value",
//car: {
// price: 1500,
//color: "red",
//country: {
//  europe: "France",
//  usa: "",
//},
//},
//};
//console.log(obj.car);

//let person = {
// name: "Bollo",
//city: "Meaux",
//};
//console.log(person);

//let allStudent = [
// {
//  name: "Bollo",
// city: "Meaux",
//},
//{
//name: "Florian",
//city: "Meaux",
//},
//];
//console.log(allStudent);

//let str = "";

//for (let i = 0; i < 9; i++) {
// str = str + i;
//}

//console.log(str);

//let n = 0;

//while (n < 3) {
//  n++;
//}

//console.log(n);
//let body = document.getElementById("body");

//let promise = new Promise((resolve, reject) => {
// resolve("toto");
//});

//promise
//.then(() => {
// Redirection vers la page succès
// let paragraph = document.createElement("p");
//paragraph.innerHTML = "Votre paiement est accepté";
// body.append(paragraph);
//})
//.then((result) => {
// console.log(result);
//})
//.finally(() => {
// Some code ...
//});

//let string = "" chaine de caractères
//let number = 1, liste de nombre
//let boolean = true / false condition vrai /faux
//let array = [] tableau
//let objet = {} stock plusieurs valeurs
//let nulll = null pas de valeur assigné
//let Symbol = Symbol
//let Bigint = Manipule les nombres

//var FirstName = "Florian";
//console.log(FirstName);
// j'ai déclaré une variable FirstName et assigné le prénom mais tout peut être modifier et redéclarer.
//let LastName = "Sabine";
//console.log(LastName);
// j'ai déclaré LastName Sabine mais ne peut pas être déclarer à nouveau.
//export const MyFirstFunction = (country,dept) =>{
//console.log(`Originaire de ${country} et du département ${dept}`);
//}
//MyFirstFunction("France", "Seine et Marne");
// Ici j'ai déclaré une constante immuable avec une fonction.

//export let obj = {
//Chaussure :"Nike",
//Taille : 45 ,
//Chausette : "Addidas",

//};
//console.log(obj.Chaussure);

//class Raquette {
// constructor(mark, size, color, price) {
//  this.mark = mark;
// this.size = size;
// this.color = color;
// this.price = price;
//}
//}

//class NewRaquette extends Raquette {
// constructor(mark, size, color, price) {
//  super(mark, size, color, price);
// }

// getColor() {
//  return `La couleur de ma Raquette est ${this.color}`;
//}

//getMark(){
// return `la marque de ma raquette est ${this.mark}`;
//}

//}

const getPerson = (firstname, lastname) => {
  console.log(`Mon prénom est ${firstname} et mon nom est ${lastname}`);
};
getPerson("florian", "sabine");

let couleur = ["bleu", "vert", "rouge"];
console.log(couleur);
couleur.push("orange", "violet");
couleur.pop();

couleur.map((Element) => {
  console.log(`Mon élément est ${Element}`);
});

const [colorbleu, ...mcdo] = couleur;
console.log(mcdo);

let Array = ["ColorA", "ColorB", "ColorC"];
const [ColorA, ...rest] = Array;

console.log(rest);
let NewArray = [...Array, "ColorD"];
console.log(NewArray);

const colormax = [...NewArray];
console.log(colormax.slice(2, 4));

let Phone1 = {
  mark: {
    editor: "samsung",
    date: "2016",
  },
  Os: {
    system: "android",
    mode: "c+",
    date: "2015",
  },
  Accesoires: {
    true: "yes",
  },
};

console.log(`mon editor est ${Phone1.mark.editor} `);
console.log(`mon système est ${Phone1.Os.system}`);
console.log(`veux tu des accesoires ? ${Phone1.Accesoires.true}`);

const Add = (value1, value2) => {
  console.log(value1 + value2);
};
Add(1, 2);

let ordinateur = ["Assus", "MSI", "HP"];
console.log(ordinateur);
ordinateur.push("Accer", "Brut");
ordinateur.pop();

ordinateur.map((Element) => {
  console.log(`Mon ordinateur est ${Element}`);
});
console.log(ordinateur.slice(1, 4));

let [ordinateurAssus, ...ORDI] = ordinateur;
console.log(ORDI);

let Newordinateur = [...ordinateur, "Nvdia"];
console.log(Newordinateur);

let Film = [
  "Comedy",
  "Fantasy",
  "Crime",
  "Drama",
  "Music",
  "Adventure",
  "History",
  "Thriller",
  "Animation",
  "Family",
  "Mystery",
  "Biography",
  "Action",
  "Film-Noir",
  "Romance",
  "Sci-Fi",
  "War",
  "Western",
  "Horror",
  "Musical",
  "Sport",
];
console.log(Film);

Film.map((Element1) => {
  console.log(`Mes catégories de films sont ${Element1}`);
});


let [index1, ...OtherF] = Film;
console.log(OtherF);

let NewFilm = [...Film, "Wow"];
console.log(NewFilm);
console.log(NewFilm.slice(2, 17));

let Film2 = {
  war: {
    firtswart: "les poilus",
    firstwar2: "la bataille du Rhin",
  },
  racing: {
    lemans: "Le mans 66",
    GPMonaco: "f1",
  },
  sport: {
    Tennis: "roland-garros",
    Rudby: "6nations",
  },
};
console.log(Film2);
console.log(`Mon film de guerre préférer est ${Film2.war.firstwar2}  `);
