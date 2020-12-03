const cep = document.querySelector('#cep');
cep.addEventListener('blur',(event)=>{
    let seach = cep.value.replace("-","");
    const options={
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }
    fetch(`http://viacep.com.br/ws/${seach}/json/`,options)
    .then(response=>{response.json()
        .then( data => console.log(data))
    })
    .catch(event => console.log('Deu Erro: '+ event.message))
})