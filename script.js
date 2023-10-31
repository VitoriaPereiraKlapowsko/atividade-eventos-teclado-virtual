const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const keyboardElement = document.getElementById("teclado"); // Obtendo o elemento do teclado no HTML (onde os botões vão aparecer)
const inputElement = document.getElementById("caixinha");// Obtendo a caixinha (campo de texto) onde você vai digitar a palavra

letras.split('').forEach((letra) => { // Iterando sobre cada letra no alfabeto
    const botao = document.createElement("button");
    botao.className = "tecladoComBotao";
    botao.textContent = letra;  // Colocando a letra no botão
    botao.addEventListener("click", () => { //Aqui temos um envento para o Click
        inputElement.value += letra; // Adicionando a letra ao campo de texto (caixinha)
    });
    keyboardElement.appendChild(botao);// Adicionando o botão ao teclado
});

function palavraSalva() {
    const palavra = inputElement.value;
    alert("Palavra que foi salva: " + palavra);
}
