document.getElementById('purple').onclick = intoPurple;
document.getElementById('green').onclick = intoGreen;
document.getElementById('blue').onclick = intoBlue;

function intoPurple() {
    document.querySelector('body').style.backgroundColor = 'purple';
    document.querySelector('body').style.color = 'white';
}

function intoGreen() {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('body').style.color = 'white';
}

function intoBlue() {
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('body').style.color = 'white';
}

