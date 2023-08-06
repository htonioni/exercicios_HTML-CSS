async function listaVideos() {
   const conexao = await fetch("https://localhost/3000/videos") 
   console.log(conexao);
}

listaVideos()