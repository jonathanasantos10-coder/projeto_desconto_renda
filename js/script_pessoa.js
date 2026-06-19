/* módulo do array que vai conter os dado inseridos no form
const newForm = document.querySelector('#form')
const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const renda = document.querySelector('#renda')

const pessoas = []

newForm.addEventListener('submit', (evt) =>{
evt.preventDefault()

const nomePessoa = nome.value
const idadePessoa = Number(idade.value)
const rendaPessoa = Number(renda.value)

pessoas.push({
    nome: nomePessoa,
    idade: idadePessoa,
    renda: rendaPessoa,
})


})
 
export {pessoas}

TODA ESSA LINHA ACIMA FOI EU TENTANDO FAZER DO JEITO QUE APRENDI NA QUESTÃO 4, MAS PAREI AO PERCEBER QUE SERIA DIFERENTE AO DECORRER DA AULA.
*/

const pessoas = []

const formPessoa = document.querySelector('#div-form')
const divResult = document.querySelector('#div-lista-pessoas')

formPessoa.addEventListener('submit', (evt) => { // capturando o submit do form
    evt.preventDefault() // interrompe o refresh
//criando o objeto dataform
    const dadosForm = newFormData(formPessoa) 

// criando e preenchendo o objeto literal pessoa (definindo os elementos no array)
    const pessoa ={
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }
// chamando a função addPessoa e passando o objeto literal pessoa (os elementos)
    addPessoa(pessoa)

    // limpando o formulário
  
})

// funções para crud
// função para adicionar pessoa
const addPessoa = (objPessoa) =>{
    pessoas.push(objPessoa)
    // ^ adicionado o objeto (elemento) no array, vindo do paraêmtro da função 
}




export {pessoas}