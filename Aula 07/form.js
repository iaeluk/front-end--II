/*
Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:

1. Crie um formulário
2. Selecione o formulário e salve-o numa variável com querySelector.
Itens a seguir serão inseridos dentro do formulário:
3. Um título com o texto: “Login”.
4. Um campo de input text com um placeholder: “Email”.
5. Um campo de input password com um placeholder: “Senha”.
6. Um botão submit com o texto “Enviar”.
7. Um botão reset com o texto “Cancelar”.
8. Insira a propriedade disabled no campo de Email.
9. Insira um estilo da sua escolha, a sugestão seria o display flex com flex-direction
column.
10. Remova o atributo placeholder do email.
*/

let formulario = document.createElement('form')
let titulo = document.createElement('h1')
titulo.textContent = 'Login'

titulo.style.color = 'black'

let div = document.createElement('div')
div.style.margin = '.3rem 0'

let inputEmail = document.createElement('input')
inputEmail.setAttribute('placeholder', 'Email')
// inputEmail.setAttribute('disabled', 'disabled')

inputEmail.style.height = '50px'
inputEmail.style.width = '300px'
inputEmail.style.marginBottom = '.1rem'

let inputSenha = document.createElement('input')
inputSenha.setAttribute('placeholder', 'Senha')
inputSenha.setAttribute('type', 'password')

inputSenha.style.height = '50px'
inputSenha.style.width = '300px'

let botaoEnviar = document.createElement('input')
botaoEnviar.setAttribute('type', 'submit')
botaoEnviar.setAttribute('value', 'Enviar')

botaoEnviar.style.cursor = 'pointer'
botaoEnviar.style.padding = '1rem 3rem'
botaoEnviar.style.border = 'none'
botaoEnviar.style.backgroundColor = 'lightgreen'
botaoEnviar.style.marginRight = '.3rem'
botaoEnviar.style.color = 'black'
botaoEnviar.style.fontSize = '1.3rem'


let botaoResetar = document.createElement('input')
botaoResetar.setAttribute('type', 'reset')
botaoResetar.setAttribute('value', 'Cancelar')

botaoResetar.style.cursor = 'pointer'
botaoResetar.style.padding = '1rem 3rem'
botaoResetar.style.border = 'none'
botaoResetar.style.backgroundColor = 'red'
botaoResetar.style.color = 'black'
botaoResetar.style.fontSize = '1.3rem'


formulario.appendChild(titulo)
formulario.appendChild(inputEmail)
formulario.appendChild(inputSenha)
formulario.appendChild(div)
div.appendChild(botaoEnviar)
div.appendChild(botaoResetar)

formulario.style.display = 'flex'
formulario.style.flexDirection = 'column'
formulario.style.alignItems = 'center'
formulario.style.justifyContent = 'center'
formulario.style.border = '1px solid white'
formulario.style.backgroundColor = 'white'
formulario.style.padding = '3rem'
formulario.style.borderRadius = '1rem'









const body = document.querySelector('body')
body.appendChild(formulario)

body.style.display = 'flex'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
body.style.height = '90vh'
body.style.backgroundColor = 'rgb(130, 10, 209)'














