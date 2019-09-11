let input = document.querySelector("#number");
let btn = document.querySelector("#check");
let secret = null;
let life = 5;
let message = document.querySelector("#message");
btn.addEventListener('click', init);

function init() {
    secret = Math.round(Math.random() * 100);
    console.log(secret);
    life = 5;
    message.innerHTML = "C'est parti !";
    input.disabled = false;
    btn.removeEventListener("click", init);
    btn.innerHTML = "check";
    btn.addEventListener("click", check);
}

function check(event) {

    if (input.value > secret) {
        life--;
        message.innerHTML = "Trop haut ! Essaie encore ;)  Il te reste " + life + " vie(s) !";
    } else if (input.value < secret) {
        life--;
        message.innerHTML = "Trop bas ! Essaie encore ;)  Il te reste " + life + " vie(s) !";
    } else {
        message.innerHTML = "Gagné !";
        input.disabled = true;
        btn.removeEventListener("click", check);
        btn.innerHTML = "Rejouer";
        btn.addEventListener("click", init);
        input.value= "";
    }

    if (life === 0) {
        message.innerHTML = "perdu !";
        input.value = "";
        input.disabled = true;
        btn.removeEventListener("click", check);
        btn.innerHTML = "Rejouer";
        btn.addEventListener("click", init);
    }
}