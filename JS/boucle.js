let result = document.querySelector("#boucle");
// let tab = ["a", "b", "c", "d"];

// for (let i = 0; i < tab.length; i++) {
//     result.innerHTML += "<p>" + tab[i] + "</p>";
// }

// let j = 0;
// while (j<tab.length) {
//     result.innerHTML += "<p>" + tab[j] + "</p>";
//     j++;
// }

// for (const value of tab) {
//     result.innerHTML += "<p>" + value + "</p>";
// }

// let k = 0;
// do {
//     result.innerHTML += "<p>" + tab[k] + "</p>";
//     k++;
// } while(k < tab.length);
let btn2 = document.querySelector("#btn");
let message2 = document.querySelector("#boucle");

btn2.addEventListener("click", getNumbers);

function getNumbers() {
    let tab = [];
    while (tab.length < 6) {
        let secret = Math.ceil(Math.random() * 49);
        if (tab.indexOf(secret) === -1) {
            tab.push(secret);
        } else {
            console.log(secret);

        }
    }

    message2.innerHTML = "";
    for (const value of tab) {
        message2.innerHTML += "<p>" + value + "</p>";
    }
}
