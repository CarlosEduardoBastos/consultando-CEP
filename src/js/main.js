const cep = document.querySelector('#cep');
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector('#'+campo)){
           document.querySelector('#'+campo).value = result[campo]
        }
    }
}
cep.addEventListener('blur',(event)=>{
    let seach = cep.value.replace("-","");
    const options={
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }
    fetch(`http://viacep.com.br/ws/${seach}/json/`,options)
    .then(response=>{response.json()
        .then( data => showData(data))
    })
    .catch(event => console.log('Deu Erro: '+ event.message))
})