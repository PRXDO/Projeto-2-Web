let statuslogin = localStorage.token !== undefined;

let input1 = document.querySelector('input[type="email"]');
let input2 = document.querySelector('input[type="password"]');
let button = document.querySelector('button[type="submit"]');

let alertmessage = document.querySelector('div[type="message"]');

const btnlogin = document.querySelector('#btnlogin');
const btnlogado = document.querySelector('#usuarioLogado');

const version = document.querySelector('#version');
let apibuscar = document.querySelector('#apibuscar');

let texto1 = input1.value;
let texto2 = input2.value;

//eve.holt@reqres.in
//cityslicka

const verificaLogin = () => {
  btnlogin.style.display = statuslogin ? 'none' : 'block';              //login
  btnlogado.style.display = statuslogin === false ? 'none' : 'block';   //login

  apibuscar.style.display = statuslogin === false ? 'none' : 'block';   //busca
  version.style.display = statuslogin ? 'none' : 'block';               //busca
};

button.addEventListener('click', async () => {
  if (input1.value == '') {
    alertmessage.innerHTML = 'Campo de usuario vazio.';

    console.log('1');
  } else if (input1.value.length > 0 && input1.value.length < 3) {
    alertmessage.innerHTML =
      'Campo de usuario não pode ter menos de 3 caracteres.';
  } else if (input2.value.length == '') {
    alertmessage.innerHTML = 'Campo de senha vazio.';
  } else {
    alertmessage.innerHTML = '';
  }

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', 'https://reqres.in/api/login', true); //XMLHttpRequest.open(method, url)
  xmlhttp.setRequestHeader('Content-Type', "application/json;charset=UTF-8")
  xmlhttp.send(JSON.stringify({ email: input1.value, password: input2.value }));
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    localStorage.token = JSON.parse(xmlhttp.responseText).token
    statuslogin = true;
    verificaLogin();
    } else if (xmlhttp.status === 400) {
      xmlhttp.send(null);
    }
  };
});

verificaLogin();
