function loadDay(day) {
    localStorage.setItem('selectedDay', day);
    location.href = 'apresentacao-dias.html';
}

function loadDayContent() {
    const day = localStorage.getItem('selectedDay');
    switch(parseInt(day)) {
        case 1:
            day1();
            break;
        case 2:
            day2();
            break;
        case 3:
            day3();
            break;
        case 4:
            day4();
            break;
        case 5:
            day5();
            break;
        case 6:
            day6();
            break;
        case 7:
            day7();
            break;
        default:
            console.error("Invalid day");
    }
}

function day1() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="titulo"></div>
        <div id="tituloDois"></div>
        <div id="tituloTres"></div>
        <button id="backButton" class="back-button">Voltar</button>
    `;

    let numeroUm = 1;
    let stringUm = '1';
    let numeroTrinta = 30;
    let stringTrinta = '30';
    let numeroDez = 9;
    let stringDez = '10';

    let texto = 'As variáveis numero e string têm o mesmo valor, mas tipos diferentes';
    let textoElse = 'As variáveis numero e string não têm o mesmo valor';

    if (numeroUm == stringUm) {
        document.getElementById('titulo').innerHTML = texto;
    } else {
        document.getElementById('titulo').innerHTML = textoElse;
    }

    if (numeroTrinta == stringTrinta) {
        document.getElementById('tituloDois').innerHTML = texto;
    } else {
        document.getElementById('tituloDois').innerHTML = textoElse;
    }

    if (numeroDez == stringDez) {
        document.getElementById('tituloTres').innerHTML = texto;
    } else {
        document.getElementById('tituloTres').innerHTML = textoElse;
    }

    document.getElementById('backButton').addEventListener('click', () => {
        location.href = 'index.html';
    });
}

function day2() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="titulo"></div>
        <button id="backButton" class="back-button">Voltar</button>
    `;

    document.getElementById('backButton').addEventListener('click', () => {
        location.href = 'index.html';
    });
}

function day3() {
    // Add specific JavaScript code for Day 3 here
}

function day4() {
    // Add specific JavaScript code for Day 4 here
}

function day5() {
    // Add specific JavaScript code for Day 5 here
}

function day6() {
    // Add specific JavaScript code for Day 6 here
}

function day7() {
    // Add specific JavaScript code for Day 7 here
}
