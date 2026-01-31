/*
Lógica de programação:
    - Aprender como se cominuca com um computador
Algoritmo:
    - Os passos na sequencia certa!
JavaScript:
    - Variaveis = pedacinho na memoria do computador que vc pode guardar o que quiser
         let = salva informações 
         console.log() = imprime na tela
    - Funcoes = pedacinho de codigo que so executa quando eu chamo
         function = uma função que so é efetivada quando eu quero, tenho que colocar seu nome, parenteses e a chave
    - Como se comunicar com o HTML
    Manipular a DOM = apreder como se comunicar com o HTML
        [x] Saber quando o botão foi clicado 
        [x] Pegar o texto que o usuario digitou
        [x] Mando para o servidor traduzir
        [x] Receber a resposta do servidor
        [] Coloco o texto na tela - nao consegui, nem a IA me ajudou

        Fase
        [] Escolher o idioma
        [] Traduzir pela microfone (Captar a voz) / IA
        [] Fernanda Ganhar Dinheiro
        [] Colocar no ar
        [] Ultima palavra chave 
         
    // JavaScript - script
    // HTML - document
      - querySelector = procurar uma tag especifica no HTML

    fetch = ferramenta do JavaScript para entrar em contato com o servidor
    await = espere / obriga a ultilizar o async na function (async & await)
    json = formato mais claro 

*/
// Exemplo de Variaveis
/* 
let numero = 2000

console.log(numero)
*/

// Exemplo de Função
/*
let nomeCliente = "Lucas Minneh"

function mostraNomeCliente() {
    console.log(nomeCliente)
}
    https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it

    Padrao = https://api.mymemory.translated.net/get?q=
    traduzir = Hello World!
    idioma = &langpair=en|it
*/

// pegando o texto do textarea 
let inputTexto;
let traducao;

document.addEventListener("DOMContentLoaded", function() {
    inputTexto = document.querySelector(".input-texto");
    traducao = document.querySelector(".traducao");
});

async function traduzir() {
    let endereco =
        "https://api.mymemory.translated.net/get?q=" +
        inputTexto.value +
        "&langpair=pt-BR|en";

    let resposta = await fetch(endereco);
    let dados = await resposta.json();

    traducao.innerHTML = dados.responseData.translatedText;
}
// clicou no botao -> chama a funcao -> monto o endereco -> chamo o servidor -> peco para esperar -> responde