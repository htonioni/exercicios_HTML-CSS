const botoes = document.querySelectorAll('.btn')
 botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {   
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    console.log(categoria);
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
};