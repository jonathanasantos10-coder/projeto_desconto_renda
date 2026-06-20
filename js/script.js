/*     <p>São insentos as pessoas menores de idade e com renda abaixo de R$ 1700,00</p>
      <P> Até R$ 5000,00 o desonto será de 5%</P>
        <p> De R$ 5001,00 até R$ 8000,00 o desconto será de 8%</p>
        <p> De R$ 8001,00 até R$ 10000,00 o desconto será de 10%</p>
        <P> De R$ 100001,00 será de 3%</P>

        Provavelmente vou precisar imprimir isso em div result na div "div-lista-pessoas"
        O professor quer usr modulos, arrays e repeticoes
        Vai dar dor de cabeça mas vou tentar fazer o array ou o calculo em um modulo.
        O resultado precisa ser tipo:
        Nome, idade, renda digitada, desconto

        Só para informar, toda vez que pego essa máquina alguém instala o git de novo, as vezes a branch principal é master e as vezes é main, por isso meu github vai ficar todo bagunçado.
*/

//acho que dá pra fazer isso a base de um if só. 

/*const newForm = document.querySelector('#form')
const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const renda = document.querySelector('#renda')
*/

import { pessoas } from './script_pessoa.js'

let resposta = ''

const calculoDesconto = (objPessoa) => {
 if((objPessoa.idade < 18)|| (objPessoa.renda <= 1700)){
  resposta = 'Isento de Desconto'
 }else if(objPessoa.renda <=5000){
    resposta = objPessoa.renda * 0.05
 }else if(objPessoa.renda <= 8000){
  resposta = objPessoa.renda * 0.10
 }else if(objPessoa.renda <= 10000){
  resposta = objPessoa.renda * 0.10
 }else{
  resposta = objPessoa.renda * 0.03
 }

 return resposta
}

export {calculoDesconto}