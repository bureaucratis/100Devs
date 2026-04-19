document.querySelector('body').style.backgroundColor = 'grey';

document.getElementById('check').addEventListener('click', check);

function check() {
    const day = document.getElementById('day').value;

    if(day === 'Saturday'.toLocaleLowerCase() || day === 'Sunday'.toLocaleLowerCase()) {
        document.querySelector('#placeToSee').innerText = 'Weekend Day!';
    }
    else if (day === 'Monday'.toLocaleLowerCase()) {
        document.querySelector('#placeToSee').innerText = 'Boring Day';
    }
    else {
        document.querySelector('#placeToSee').innerText = 'Weekday';
    }
}