let btn = document.querySelector("button");
let secondes = 10;
let interval;

btn.addEventListener("click", start);

function start() {
    interval = setInterval(decompte, 1000);
}

function stop() {
    clearInterval(interval);
    document.body.innerHTML += "<br>" + "Stop !";
}

function decompte() {
    secondes--;
    if(secondes == 0) {
        stop();
    } else {
        document.body.innerHTML += "<br>" + secondes + "<br>";
    }
}
