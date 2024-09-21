HTML da página:

- O meu aquivo HTMl eu crei apenas um form com metodo GET onde inseri nele um h1 contendo um titulo 'Consulte seu Cep abaixo:'.

- Em seguida criei um label e um input do type text, onde o label referencia o CEP e o input recebe o valor digitado pelo usuário.

- Criei um button do type button para realizar a chamada da função 'buscarCep() no javascript utilizando o atributo onclick="".

- Foi criado uma Div de id #resultado onde será exibido o resultado apresentado pela API, dentro dessa DIV inseri apenas um titulo 'Seu resultado aqui', ele some logo após a API retornar com os resultados.




JavaScript da Página:

Passo 1: Criei uma função chamada buscarCep() que foi a responsavel pela busca do Cep na API, ela foi inserida no button no HTML para que todas as vezes que ocorresse o click no button do HTML seja chamada essa função.

Passo 2: Criei uma const chamada cep que chama o meu elemento HTML com #id cep com o parametro .value que pega o valor digitado pelo usuário no campo.

Passo 3: Realizei uma pequena validação que verifica se o cep digitado é diferente de 8 caracteres, e caso seja diferente de um tamanho 8 solta um alerta para o usuário dizendo 'Cep está inválido!'. Usando o return para sair do if e continuar na função, ou já terminar ali, caso apresente o erro. 

Passo 4: Fiz um fetch para a API utilizando o link: `https://viacep.com.br/ws/${cep}/json/` que pega o cep de forma dinamica.

Passo 5: utilizei o .then para transformar a minha resposta da API em formato json.

Passo 6: Chamei um outro .then que é o responsavel por trazer estes dados para a minha API, após buscar, transformar em Json, eles ficaram no meu data.

Passo 7: Tudo isso foi abraçado por um try catch para que ocorresse um melhor tratamento, destes dados, e caso a requisição apresentasse falha, o catch seria acionado com o erro 'O ${cep} digitado é inválido.'

Passo 8: Realizei a criação da função mostrarResultado(dados), e em seguida já peguei o meu campo Div com Id #resultado lá no meu HTML para que dentro dele fosse exibido o resultado trazido pela API dinamicamente. Para isso utilizei o resultado.InnerHTML = `` e montei toda a resposta no seguinte padrão.

resultado.innerHTML = `         CEP: ${dados.cep}<br>
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

Então dentro da minha div de id #resultado eu coloquei o retorno da API dinamicamente utilizando a crase para montar uma só resposta e pegando o meu data de dados utilizando o dados.informação desejada

Passo 9: Feito isso, busquei o meu cep local, 32606596 e obtive o resultado em tela. 

É isso, API do Via Cep sendo consumida com sucesso.
link da documentação da API: https://viacep.com.br/