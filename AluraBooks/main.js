var consultaCEP = fetch('https://viacep.com.br/ws/27335020/json/')
    .then(resposta => resposta.json()
    .then(r => console.log(r)));

