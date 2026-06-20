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

import { calculoDesconto } from './script.js'

const pessoas = [] // array zerado 

const formPessoa = document.querySelector('#form-pessoa')
const divResult = document.querySelector('#div-lista-pessoas')

formPessoa.addEventListener('submit', (evt) => { // capturando o submit do form
    evt.preventDefault() // interrompe o refresh
    //criando o objeto dataform
    const dadosForm = new FormData(formPessoa)

    // criando e preenchendo o objeto literal pessoa (definindo os elementos no array)
    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }
    // chamando a função addPessoa e passando o objeto literal pessoa (os elementos)
    addPessoa(pessoa)

    // limpando o formulário
    formPessoa.reset()
})

// funções para crud
// função para adicionar pessoa
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)
    // ^ adicionado o objeto (elemento) no array, vindo do paraêmtro da função 

    listaPessoa() // aqui chama a função de listar pessoa
}

// função listar pessoas
const listaPessoa = () => {
  
    // Percorrendo o array com a estrutura de repetição foreach
    divResult.innerHTML = '' // <- Limpa a div antes de mostrar o próximo resultado
    pessoas.forEach((elem, i) => {
        divResult.innerHTML += `<div class='item-pessoa'> ${i + 1} -  ${elem.nome}, Idade: ${elem.idade}, Renda: R$ ${parseFloat(elem.renda).toFixed(2).replace('.', ',')}, o seu desconto é ${calculoDesconto(elem)} </div>` //class div faz uma classe nova para que eu possa editar somene ela lá no css
    })
}


export { pessoas }