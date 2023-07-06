function verificaSeChuteValido(chute) {
    const numero = +chute
    const parar = "GAME OVER"
    
    

    if (ChuteForInvalido(numero)) {
        if (chute.toUpperCase() === parar) {
            document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>O numero secreto era <span class="box">${numeroSecreto}</span></h3>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente </button>
            `
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>'
        }
    };

    if (NumeroMaiorOuMenorDeadline(numero)) {
        elementoChute.innerHTML += 
        `<div>Invalido! O valor precisa 
        estar entre: ${menorValor} e ${maiorValor}</div>
        `
        return
    };


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Voce acertou!</h2>
        <h3>O numero secreto era <span class="box">${numeroSecreto}</span></h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente </button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
};

function ChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function NumeroMaiorOuMenorDeadline(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click',e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})