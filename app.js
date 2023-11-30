var enterConfirmBtn = document.getElementById("opcaoMenu");
var enterCalcBtn = document.getElementById("valorSalario");
var enterMesesBtn = document.getElementById("mesesTrabalho");

enterConfirmBtn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("confirmarOpcao").click();
    }
})

enterCalcBtn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("calcularBtn").click();
    }
})

enterMesesBtn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("calcularBtn").click();
    }
})

function resultadoOpcao() {
    var opcaoMenu = document.getElementById("opcaoMenu").value;
    var opcaoValida = true;
    if (document.getElementById("valorSalario").style.visibility == "hidden") {
        if (opcaoMenu == '3') {
            document.getElementById("textoMesesTrabalho").style.visibility = "visible";
            document.getElementById("mesesTrabalho").style.visibility = "visible";            
        } 
        else if (opcaoMenu == '4') {
            location.href = "home.html";
        }
        else if (opcaoMenu != '1' && opcaoMenu != '2') {
            opcaoValida = false;
        }
        document.getElementById("textoOpcao").innerText = "Insira abaixo seu salário atual";
        document.getElementById("textoExplicaOpcao").style.visibility = "visible";
    }
    else {
        switch(opcaoMenu) {
            case '1':
                calcularNovoSalario();
                break;
            case '2':
                calcularValFerias();
                break;
            case '3':
                calcularDecimoTerceiro();
                break;
            default:
                break;
        }
    }
    if (opcaoValida) {
        if (document.getElementById("valorSalario").style.visibility == "hidden") {
            document.getElementById("valorSalario").style.visibility = "visible";
            document.getElementById("opcaoMenu").style.visibility = "hidden";
            document.getElementById("confirmarOpcao").style.visibility = "hidden";
            document.getElementById("calcularBtn").style.visibility = "visible";
            document.getElementById("retornarBtn").style.visibility = "visible";
        }
    }
    else {
        document.getElementById("textoOpcao").innerText = "Opção inválida";
    }
}

function calcularNovoSalario() {
    let valSalario = parseFloat(document.getElementById("valorSalario").value);
    let novoSalario = valSalario;
    if (valSalario < 1200) {
        novoSalario += (+((valSalario * 15)/100).toFixed(2));
    }
    else if (valSalario > 1200 && valSalario <= 2400) {
        novoSalario += (+((valSalario * 10)/100).toFixed(2));
    }
    else if (valSalario > 2400) {
        novoSalario += (+((valSalario * 5)/100).toFixed(2));
    }
    if (isNaN(valSalario)) {
        document.getElementById("resultadoOpcao").innerText = "Opção Inválida";
    } 
    else {
        document.getElementById("resultadoOpcao").innerText = "Seu novo salário é de: R$" + novoSalario;
    } 
}

function calcularValFerias() {
    let valSalario = parseFloat(document.getElementById("valorSalario").value);
    let valFerias = valSalario
    valFerias += (+(valSalario / 3).toFixed(2));
    if (isNaN(valSalario)) {
        document.getElementById("resultadoOpcao").innerText = "Opção Inválida";
    } 
    else {
        document.getElementById("resultadoOpcao").innerText = "O valor de suas férias é de: R$" + valFerias;
    }
}

function calcularDecimoTerceiro() {
    let valSalario = parseFloat(document.getElementById("valorSalario").value);
    let mesesTrabalho = parseFloat(document.getElementById("mesesTrabalho").value);
    let valDecimoTerceiro = 0;
    valDecimoTerceiro = (+(mesesTrabalho * valSalario) / 12).toFixed(2);
    if (isNaN(valSalario) || isNaN(mesesTrabalho)) {
        document.getElementById("resultadoOpcao").innerText = "Opção Inválida";
    } 
    else {
        document.getElementById("resultadoOpcao").innerText = "O valor de seu 13° salário é de: R$" + valDecimoTerceiro;
    }
}