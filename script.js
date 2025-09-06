const form = document.querySelector("#form");
const nomeEntrada = document.querySelector("#nome");
const emailEntrada = document.querySelector("#email");
const stackPrincipal = document.querySelector("#stack");
const experienciaSelecionada = document.querySelector("#experiencia");
const projetosEntrada = document.querySelector("#projetos");
const nivelSenioridade = document.querySelector("#senioridade");
const objetivoEntrada = document.querySelector("#objetivo");
const nivelIngles = document.querySelector("#ingles");
const modeloTrabalho = document.querySelector("#trabalho");
const areaAtuacao = document.querySelector("#area");


function validarFormulario() {
    limparErros();
    
    let valido = true;
    if (!nomeEntrada.value.trim()) {
        mostrarErro(nomeEntrada, "Digite o seu nome completo");
        valido = false;
    }
    
    if (!emailEntrada.value) {
        mostrarErro(emailEntrada, "Digte um email válido");
        valido = false;
    }
    
    if (!stackPrincipal.value) {
        mostrarErro(stackPrincipal, "Stack principal é obrigatória");
        valido = false;
    }

    if (!experienciaSelecionada.value) {
        mostrarErro(experienciaSelecionada, "Selecione sua experiência");
        valido = false;
    }
    
    if (!projetosEntrada.value.trim()) {
        mostrarErro(projetosEntrada, "Descreva seus projetos");
        valido = false;
    }
    
    if (!nivelSenioridade.value) {
        mostrarErro(nivelSenioridade, "Selecione seu nível");
        valido = false;
    }
    
    if (!objetivoEntrada.value.trim()) {
        mostrarErro(objetivoEntrada, "Objetivo é obrigatório");
        valido = false;
    }
    
    if (!nivelIngles.value) {
        mostrarErro(nivelIngles, "Selecione seu nível de inglês");
        valido = false;
    }
    
    if (!modeloTrabalho.value) {
        mostrarErro(modeloTrabalho, "Selecione o modelo de trabalho");
        valido = false;
    }

    if (!areaAtuacao.value) {
        mostrarErro(areaAtuacao, "Selecione sua área");
        valido = false;
    }
    
    return valido;
}

function mostrarErro(campo, mensagem) {
    campo.style.borderColor = "#ff4444";
    let spanErro = campo.parentNode.querySelector(".erro");
    if (!spanErro) {
        spanErro = document.createElement("span");
        spanErro.className = "erro";
        spanErro.style.color = "#ff4444";
        spanErro.style.fontSize = "12px";
        campo.parentNode.appendChild(spanErro);
    }
    spanErro.textContent = mensagem;
}

function limparErros() {
    const campos = [nomeEntrada, emailEntrada, stackPrincipal, experienciaSelecionada, projetosEntrada, nivelSenioridade, objetivoEntrada, nivelIngles, modeloTrabalho, areaAtuacao];
    
    campos.forEach(campo => {
        campo.style.borderColor = "";
        const mensagemErro = campo.parentNode.querySelector(".erro");
        if (mensagemErro) {
            mensagemErro.remove();
        }
    });
} 
 
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validarFormulario()) {
        alert("Formulário enviado com sucesso!");
    } else {
        console.log("Formulário contém erros");
    }
});