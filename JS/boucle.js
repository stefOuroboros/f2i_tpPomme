let result = document.querySelector("#boucle");
let tab = ["a", "b", "c", "d"];

for (let i = 0; i < tab.length; i++) {
    result.innerHTML += "<p>" + tab[i] + "</p>";
}

let j = 0;
while (j<tab.length) {
    result.innerHTML += "<p>" + tab[j] + "</p>";
    j++;
}

for (const value of tab) {
    result.innerHTML += "<p>" + value + "</p>";
}

let k = 0;
do {
    result.innerHTML += "<p>" + tab[k] + "</p>";
    k++;
} while(k < tab.length);