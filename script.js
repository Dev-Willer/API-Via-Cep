function buscarCep() {
    try{
        const cep = document.getElementById('cep').value;

        if(cep.length !== 8){
            alert('Cep está inválido!')
            return;
        }
    
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
    
        .then((response) => response.json())
    
        .then((data) => {
            mostrarResultado(data)
        })

    } catch(error){
        alert(`O ${cep} digitado é inválido.`)
    }
} // Essa função realiza a busca do Cep na API, ele recebe o value digitado no campo de id cep, e guarda esse valor digitado. 

function mostrarResultado(dados){
    const resultado = document.getElementById('resultado')

        resultado.innerHTML = `     CEP: ${dados.cep}<br>
        Logradouro: ${dados.logradouro}<br>
        Complemento: ${dados.complemento}<br>
        Bairro: ${dados.bairro}<br>
        Localidade: ${dados.localidade} - ${dados.uf}<br>
        Estado: ${dados.estado}<br>
        Região: ${dados.regiao}<br>
        IBGE: ${dados.ibge}<br>
        GIA: ${dados.gia}<br>
        DDD: ${dados.ddd}<br>
        Siafi: ${dados.siafi}<br>`
} // Essa função é responsavel apenas por pegar o ID da Div resultado, e logo em seguida inserir nela o resultado que vem da API