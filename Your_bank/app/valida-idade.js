export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date();
    const DataMaior18 = new Date(dataAtual.getUTCFullYear() - 18, dataAtual.getUTCMonth(), dataAtual.getUTCDate());

    return DataMaior18 >= data;
}      