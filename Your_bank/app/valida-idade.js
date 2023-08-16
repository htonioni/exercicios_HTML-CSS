export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuario nao é maior de idade')
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const DataMaior18 = new Date(dataAtual.getUTCFullYear() - 18, dataAtual.getUTCMonth(), dataAtual.getUTCDate());

    return DataMaior18 >= data;
}      