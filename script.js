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
        <div id="conteudo__principal">
            <p id="paragrafo__um">Responda no campo abaixo qual das duas áreas você deseja seguir: Frontend ou Backend? Conforme for respondendo irá aparecer outras perguntas.</p>
            <div id="conteudo__segundo">
                <input type="text" id="informacao" placeholder="Digite algo">
                <button id="button__um">Gravar</button>
            </div>
            <p id="paragrafo__dois"></p>
            <div id="conteudo__terceiro">
                <input type="text" id="informacao__dois" placeholder="Digite algo">
                <button id="button__dois">Gravar</button>
            </div>
            <p id="paragrafo__tres"></p>
            <div id="conteudo__quarto">
                <input type="text" id="informacao__tres" placeholder="Digite algo">
                <button id="button__tres">Gravar</button>
            </div>
            <p id="paragrafo__quatro"></p>
            <div id="conteudo__quinto">
                <input type="text" id="informacao__quatro" placeholder="Digite algo">
                <button id="button__quatro">Gravar</button>
            </div>
            <p id="paragrafo__cinco"></p>
        </div>
    `);

    document.getElementById("button__um").addEventListener("click", gravarValor);
    document.getElementById("button__tres").addEventListener("click", gravarValorTres);
    document.getElementById("button__quatro").addEventListener("click", gravarValorQuatro);

    function gravarValor() {
        const valor = document.getElementById("informacao").value;
        const button = document.getElementById("button__dois");

        if (valor === "Frontend") {
            document.getElementById("paragrafo__dois").innerHTML = "Você quer aprender React ou aprender Vue?";
            button.onclick = gravarValorDoisFront;
        } else if (valor === "Backend") {
            document.getElementById("paragrafo__dois").innerHTML = "Você quer aprender C# ou aprender Java?";
            button.onclick = gravarValorDoisBack;
        }
    }

    function gravarValorDoisFront() {
        const valorDois = document.getElementById("informacao__dois").value;
        const valor = document.getElementById("informacao").value;

        if (valorDois === "React" || valorDois === "Vue") {
            document.getElementById("paragrafo__tres").innerHTML = `Muito bom! ${valorDois} é um excelente começo. Agora você pode escolher entre seguir se especializando em ${valor} ou seguir se desenvolvendo para se tornar Fullstack. Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?`;
        } else {
            alert("Escolha entre React ou Vue");
        }
    }

    function gravarValorDoisBack() {
        const valorDois = document.getElementById("informacao__dois").value;
        const valor = document.getElementById("informacao").value;

        if (valorDois === "C#" || valorDois === "Java") {
            document.getElementById("paragrafo__tres").innerHTML = `Muito bom! ${valorDois} é um excelente começo. Agora você pode escolher entre seguir se especializando em ${valor} ou seguir se desenvolvendo para se tornar Fullstack. Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?`;
        } else {
            alert("Escolha entre C# ou Java");
        }
    }

    function gravarValorTres() {
        const valorTres = document.getElementById("informacao__tres").value;
        if (valorTres === "Frontend" || valorTres === "Backend" || valorTres === "Fullstack") {
            paragrafo__quatro.innerHTML = `${valorTres} é uma ótima escolha, essa área abrange diversos setores. Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?`;
        } 
    }

    const react = "React";
    const vue = "Vue";
    const cSharp = "C#";
    const java = "Java";

    function gravarValorQuatro() {
        const valorQuatro = document.getElementById("informacao__quatro").value;

        if (valorQuatro == react || valorQuatro == vue || valorQuatro == cSharp || valorQuatro == java) {
            paragrafo__cinco.innerHTML = `${valorQuatro} é uma linguagem sensacional!`;
        } else {
            while (valorQuatro != react || valorQuatro != vue || valorQuatro != cSharp || valorQuatro != java) {
                const resultado = prompt("Tem mais alguma tecnologia que você gostaria de conhecer?");
                if (resultado == react || resultado == vue || resultado == cSharp || resultado == java) {
                    paragrafo__cinco.innerHTML = `${resultado} é uma linguagem mundialmente usada! Continue estudando e sera recompensando com muito conhecimento!`;
                    break;
                }
            }
        }
    }
}

function day4() {
    createContent(`
        <button onclick="verificarPalpite()" id="comecar">START</button>
    `);

    document.getElementById("comecar").addEventListener("click", verificarPalpite);

    let numeroLimite = 10;
    let tentativas = 0;
    let numeroMisterioso = gerarNumeroAleatorio();

    function verificarPalpite() {

        while (tentativas < 3){
            let palpite = prompt("Escolha um número entre 0 e 10");
            if (palpite == numeroMisterioso) {
                alert("Parabéns, você acertou!");
                break
            } else {
                alert("Não foi dessa vez, você errou o palpite.");
                if (tentativas == 2){
                    alert(`O número misterioso era ${numeroMisterioso}`)
                }
            };
            tentativas ++;
        }
    }

    function gerarNumeroAleatorio() {
        let listaDeNumerosSorteados = [];
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
            listaDeNumerosSorteados = [];
        }
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
    }
}

function day5() {
    createContent(`
    <div id="parte__principal">
        <h1 id="lista">Lista de compras:</h1>
        <p id="listaFrutas"></p>
        <p id="listaLaticinios"></p>
        <p id="listaCongelados"></p>
        <p id="listaDoces"></p>
    </div>

    `);

    const frutas = [];
    const laticinios = [];
    const congelados = [];
    const doces = [];

    const pergunta = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com Sim ou Não");
    while (pergunta == "Sim"){
        const comida = prompt("Qual comida você deseja inserir?");
        const categoria = prompt("Em qual das seguintes categoria essa comida se encaixa? Opções: frutas, laticinios, congelados e doces");
        if (categoria == "frutas") {
            frutas.push(comida);
        }
        if (categoria == "laticinios") {
            laticinios.push(comida);
        }
        if (categoria == "congelados") {
            congelados.push(comida);
        }
        if (categoria == "doces") {
            doces.push(comida);
        }
        const terminar = prompt("Você quer adicionar mais comida? Responda com Sim ou Não")
        if (terminar == "Não"){
            listaFrutas.innerHTML = `Frutas: ${frutas} ✔️`;
            listaLaticinios.innerHTML = `Laticínios: ${laticinios} ✔️`;
            listaCongelados.innerHTML = `Congelados: ${congelados} ✔️`;
            listaDoces.innerHTML = `Doces: ${doces} ✔️`;
            break
        }

    } if (pergunta == "Não"){
        lista.innerHTML = "Sua lista está vazia ✖️";
    }

}

function day6() {
    createContent(`
    <div id="p__principal">
        <h1 id="lista">Lista de compras:</h1>
        <p id="listaFrutas"></p>
        <p id="listaLaticinios"></p>
        <p id="listaCongelados"></p>
        <p id="listaDoces"></p>
    </div>

    `);

    const frutas = [];
    const laticinios = [];
    const congelados = [];
    const doces = [];

    const pergunta = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com Sim ou Não.");
    while (pergunta == "Sim"){
        const comida = prompt("Qual comida você deseja inserir?");
        const categoria = prompt("Em qual das seguintes categoria essa comida se encaixa? Opções: frutas, laticinios, congelados e doces");
        if (categoria == "frutas") {
            frutas.push(comida);
        }
        if (categoria == "laticinios") {
            laticinios.push(comida);
        }
        if (categoria == "congelados") {
            congelados.push(comida);
        }
        if (categoria == "doces") {
            doces.push(comida);
        }
        
        alert(` Você já tem na LISTA DE FRUTAS: ${frutas}. Na LISTA DE LATICÍNIOS: ${laticinios}. Na LISTA DE CONGELADOS: ${congelados}. Na LISTA DE DOCES: ${doces}.`);

        const terminar = prompt("Você quer adicionar mais item, remover item, ou finalizar lista? Responda com adicionar, remover, finalizar.");
        if (terminar == "finalizar"){
            listaFrutas.innerHTML = `Frutas: ${frutas} ✔️`;
            listaLaticinios.innerHTML = `Laticínios: ${laticinios} ✔️`;
            listaCongelados.innerHTML = `Congelados: ${congelados} ✔️`;
            listaDoces.innerHTML = `Doces: ${doces} ✔️`;

            break
        }
        if (terminar == "remover"){

            const removerItem = prompt(`O item que você quer remover pertence à qual categoria? `);
            /*Responda com o número equivalente à posição dele na ordem da sua categora, lembre-se, o primeiro item da categoria equivale ao número 0. Ex: Lista de frutas: Banana, Morango, Abacaxi. A Banana seria 0, Morange 1, Abacaxi 2...*/
            if(removerItem == "frutas"){
                const frutaRemovida = prompt(`Lista de Frutas: ${frutas}. Qual fruta você quer remover? Digite o número de acordo com a posição dele dentro da categoria, lembre-se: a lista começa com 0 no primeiro item da categoria.`);
                frutas.splice(frutaRemovida);
            }
            if(removerItem == "laticinios"){
                const laticinioRemovido = prompt(`Lista de Laticínio: ${laticinios}. Qual laticinio você quer remover?  Digite o número de acordo com a posição dele na categoria, lembre-se: a lista começa com 0 no primeiro item da categoria.`);
                laticinios.splice(laticinioRemovido);
            }
            if(removerItem == "congelados") {
                const congeladoRemovido = prompt(`Lista de Congelados: ${congelados}. Qual congelado você quer remover? Digite o número de acordo com a posição dele na categoria, lembre-se: a lista começa com 0 no primeiro item da categoria.`);
                congelados.splice(congeladoRemovido);
            }
            if(removerItem == "doces") {
                const doceRemovido = prompt(`Lista de Doces: ${doces}. Qual doce você quer remover? Digite o número de acordo com a posição dele na categoria, lembre-se: a lista começa com 0 no primeiro item da categoria.`);
                doces.splice(doceRemovido);
            }
            alert(` Agora você tem na LISTA DE FRUTAS: ${frutas}. Na LISTA DE LATICÍNIOS: ${laticinios}. Na LISTA DE CONGELADOS: ${congelados}. Na LISTA DE DOCES: ${doces}.`);

        }

    } if (pergunta == "Não"){
        lista.innerHTML = "Sua lista está vazia ✖️";
    }

}

function day7() {
    createContent(`
        <div id="calculadora">
        <h1 id="calculadora__titulo">Calculadora</h1>
        <div id="principal">
            <div class="caixaUm">
                <div id="soma">
                    <p id="paragrafoUm"></p>
                    <button id="botaoUm">+</button>
                </div>
                <div id="subtracao">
                    <p id="paragrafoDois"></p>
                    <button id="botaoDois">-</button>
                </div>
            </div>
            <div class="caixaDois">
                <div id="multiplicacao">
                    <p id="paragrafoTres"></p>
                    <button id="botaoTres"> x </button>
                </div>
                <div id="divisao">
                    <p id="paragrafoQuatro"></p>
                    <button id="botaoQuatro">÷</button>
                </div>
            </div>
        </div>
        <button id="botaoSair" class="botaoSair">Sair</button>
    </div>
    `);

    document.getElementById("botaoUm").addEventListener("click", somarNumeros);
    document.getElementById("botaoDois").addEventListener("click", subtrairNumeros);
    document.getElementById("botaoTres").addEventListener("click", multiplicarNumeros);
    document.getElementById("botaoQuatro").addEventListener("click", dividirNumeros);
    document.getElementById("botaoSair").addEventListener("click", () => alert("Até a próxima"));

    function somarNumeros(){
        const primeiroNumero = parseInt(prompt("Digite um número"));
        const segundoNumero = parseInt(prompt("Digite um número para somar com o número digitado anteriormente"));
        if(primeiroNumero >= 0){
            let resultado = primeiroNumero + segundoNumero;
            paragrafoUm.innerHTML = `${primeiroNumero} + ${segundoNumero} = ${resultado}`;
        }
    }
    
    function subtrairNumeros(){
        const primeiroNumero = parseInt(prompt("Digite um número"));
        const segundoNumero = parseInt(prompt("Digite um número para subtrair com o número digitado anteriormente"));
        if(primeiroNumero >= 0){
            let resultado = primeiroNumero - segundoNumero;
            paragrafoDois.innerHTML = `${primeiroNumero} - ${segundoNumero} = ${resultado}`;
        }
    }
    
    function multiplicarNumeros(){
        const primeiroNumero = parseInt(prompt("Digite um número"));
        const segundoNumero = parseInt(prompt("Digite um número para multiplicar com o número digitado anteriormente"));
        if(primeiroNumero >= 0){
            let resultado = primeiroNumero * segundoNumero;
            paragrafoTres.innerHTML = `${primeiroNumero} x ${segundoNumero} = ${resultado}`;
        }
    }
    
    function dividirNumeros(){
        const primeiroNumero = parseInt(prompt("Digite um número"));
        const segundoNumero = parseInt(prompt("Digite um número para dividir com o número digitado anteriormente"));
        if(primeiroNumero >= 0){
            let resultado = primeiroNumero / segundoNumero;
            paragrafoQuatro.innerHTML = `${primeiroNumero} ÷ ${segundoNumero} = ${resultado}`;
        }
    }
}