let iciDuTexte = "abc";
let iciUnEntier = 3;
let unAutreEntier = "3";
let encoreEntier = 0;
let iciUnNombreAVirgule = 1.2;
let iciUnTableau = ["a", "b", 12];
let iciUnObjet = {
    "name" : "Bob",
    "age" : 42,
    "city" : "Paris"
}

console.log(iciDuTexte, iciUnEntier, iciUnNombreAVirgule, iciUnTableau, iciUnObjet);
console.log(iciUnTableau[1]);
console.log(iciUnObjet.name);
console.log(iciUnEntier == unAutreEntier);
console.log(iciUnEntier === unAutreEntier);
console.log(iciUnEntier == iciUnTableau.length);
console.log(encoreEntier == false);

let var1;

if (iciUnEntier > 2) {
    var1 = "Hello!";
} else {
    var1 = "nok2";
}

let var2 = (iciUnEntier > 2)?"Hello!":"nok2";

switch (iciUnEntier) {
    case 1: console.log("value 1"); break;
    case 2: console.log("value 1"); break;
    case 3: console.log("value 3"); break;
    default: console.log("default");
    
}