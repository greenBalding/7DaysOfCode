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

function addBackButton() {
    const backButton = document.createElement('button');
    backButton.id = 'backButton';
    backButton.className = 'back-button';
    backButton.textContent = 'Voltar';
    document.getElementById('content').appendChild(backButton);

    backButton.addEventListener('click', () => {
        location.href = 'index.html';
    });
}

function createContent(html) {
    const content = document.getElementById('content');
    content.innerHTML = html;
    addBackButton();
}

function day1() {
    createContent(`
        <div id="titulo"></div>
        <div id="tituloDois"></div>
        <div id="tituloTres"></div>
    `);

    let numeroUm = 1;
    let stringUm = '1';
    let numeroTrinta = 30;
    let stringTrinta = '30';
    let numeroDez = 9;
    let stringDez = '10';

    let texto = 'As variáveis numero e string têm o mesmo valor, mas tipos diferentes';
    let textoElse = 'As variáveis numero e string não têm o mesmo valor';

    if (numeroUm == stringUm) {
        titulo.innerHTML = texto;
    } else {
        titulo.innerHTML = textoElse;
    }

    if (numeroTrinta == stringTrinta) {
        tituloDois.innerHTML = texto;
    } else {
        tituloDois.innerHTML = textoElse;
    }

    if (numeroDez == stringDez) {
        tituloTres.innerHTML = texto;
    } else {
        tituloTres.innerHTML = textoElse;
    }
}

function day2() {
    createContent(`
        <div id="paragrafos">
            <p id="primeiroTexto"></p>
            <p id="segundoTexto"></p>
            <p id="terceiroTexto">Perguntas e Respostas</p>
        </div>
    `);

    let nome = prompt("Qual seu nome?");
    let idade = prompt("Quantos anos você tem?");
    let linguagem = prompt("Qual linguagem de programação você está estudando?");

    if (nome && idade && linguagem) {
        primeiroTexto.innerHTML = `1 - Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    } else {
        primeiroTexto.innerHTML = "Informações inválidas, preencha os campos vazios!";
    }

    let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

    if (resposta == 1) {
        segundoTexto.innerHTML = "2 - Muito bom! Continue estudando e você terá muito sucesso.";
    } else if (resposta == 2) {
        segundoTexto.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
    }
}

function day3() {
    createContent(`
        <div id="titulo"></div>
    `);

    // Add specific JavaScript code for Day 3 here
}

function day4() {
    createContent(`
        <div id="titulo"></div>
    `);

    // Add specific JavaScript code for Day 4 here
}

function day5() {
    createContent(`
        <div id="titulo"></div>
    `);

    // Add specific JavaScript code for Day 5 here
}

function day6() {
    createContent(`
        <div id="titulo"></div>
    `);

    // Add specific JavaScript code for Day 6 here
}

function day7() {
    createContent(`
        <div id="titulo"></div>
    `);

    // Add specific JavaScript code for Day 7 here
}



/*function gravarValor(){
    const valor = document.getElementById("informacao").value;
    const button = document.getElementById("button__dois");

    if (valor === "Frontend"){
        paragrafo__dois.innerHTML = "Você quer aprender React ou aprender Vue?";
        button.setAttribute("onclick", "gravarValorDoisFront()");
    }
    if (valor === "Backend"){
        paragrafo__dois.innerHTML = "Você quer aprender C# ou aprender Java?";
        button.setAttribute("onclick", "gravarValorDoisBack()");
    }s
}

function gravarValorDoisFront(){
    const valorDois = document.getElementById("informacao__dois").value;

    if (valorDois === "React" || valorDois === "Vue"){

        paragrafo__tres.innerHTML = `Muito bom! ${valorDois} é um excelente começo. Você pode escolher entre seguir se especializando em Frontend ou seguir se desenvolvendo para se tornar Fullstack.`;
    } else {
        alert("Escolha entre React e Vue");
    }
}

function gravarValorDoisBack(){
    const valorDois = document.getElementById("informacao__dois").value;
    if (valorDois === "C#" || valorDois === "Java"){

        paragrafo__tres.innerHTML = `Muito bom! ${valorDois} é um excelente começo. Você pode escolher entre seguir se especializando em Backend ou seguir se desenvolvendo para se tornar Fullstack.`;
    } else {
        alert("Escolha entre C# e Java")
    }
}

function gravarValorTres (){
    const valorTres = document.getElementById("informacao__tres").value;
    if (valorTres === "Frontend" || valorTres === "Backend" || valorTres === "Fullstack"){
        paragrafo__quatro.innerHTML = `${valorTres} é uma ótima escolha, essa área abrange diversos setores. Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?`;
    }
}

const react = "React";
const vue = "Vue";
const cSharp = "C#";
const java = "Java";

function gravarValorQuatro(){
    const valorQuatro = document.getElementById("informacao__quatro").value;

    while (valorQuatro != react || valorQuatro != vue || valorQuatro != cSharp || valorQuatro != java){
        const resultado = prompt("Tem mais alguma tecnologia que você gostaria de conhecer?");
        if(resultado == react || resultado == vue || resultado == cSharp || resultado == java){
            paragrafo__cinco.innerHTML = `${resultado} é uma linguagem mundialmente usada! Continue estudando e sera recompensando com muito conhecimento!`;
            break;
        }
    }
    if (valorQuatro == react || valorQuatro == vue || valorQuatro == cSharp || valorQuatro == java){
        paragrafo__cinco.innerHTML = `${valorQuatro} é uma linguagem sensacional!`;
    }

}*/
