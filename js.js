let logado = localStorage.token !== undefined

let input1 = document.querySelector('input[type="email"]')
let input2 = document.querySelector('input[type="password"]')
let button = document.querySelector('button[type="submit"]')
let lis = document.querySelectorAll('ul li[id="btnlogin"]');

 const verificaLogin = () => {
    btnlogin.style.display = logado ? 'none' : 'block'
 }

button.addEventListener('click', async() => {
    const request = new XMLHttpRequest()
    request.open('POST', 'https://reqres.in/api/login', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify({ email: input1.value, password: input2.value }))
    request.onload = () => {
        const verificador = JSON.parse(request.response)
        if (request.status === 400)
            return mensagemFeedbackLogin.textContent = verificador.error
        else {
            localStorage.token = verificador.token
            logado = true
            verificaLogin()
        }
    }
});
