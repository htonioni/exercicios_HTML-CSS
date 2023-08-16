import ehUmCPF from "./validaCPF.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
console.log(Date());

camposDoFormulario.forEach((barrinhaCampo) => {
    // Blur -> quando seleciona fora de uma "barrinha"
    barrinhaCampo.addEventListener("blur", () => verificaCampo(barrinhaCampo));
});

function verificaCampo(barrinhaCampo) {
    if (barrinhaCampo.name == "cpf" && barrinhaCampo.value.length >= 11) {
        ehUmCPF(barrinhaCampo);
    };
    if (barrinhaCampo.name == "aniversario" && barrinhaCampo.value != "") {
        ehMaiorDeIdade(barrinhaCampo);
    };

};
