let statuslogin = localStorage.token !== undefined;

let input1 = document.querySelector('input[type="email"]');
let input2 = document.querySelector('input[type="password"]');
let button = document.querySelector('button[type="submit"]');

let alertmessage = document.querySelector('div[type="message"]');

const btnlogin = document.querySelector('#btnlogin');
const btnlogado = document.querySelector('#usuarioLogado');

const version = document.querySelector('#version');
let apibuscar = document.querySelector('#apibuscar');

let areaprincipal = document.querySelector('#areaprincipal');
let areaimg = document.querySelector('#areaimg');

let apiselect = document.querySelector('#apiselect');

let texto1 = input1.value;
let texto2 = input2.value;

//eve.holt@reqres.in
//cityslicka

//Função que ao realizar o login esconde o botão login e mostra o botão de busca
const verificaLogin = () => {
  btnlogin.style.display = statuslogin ? 'none' : 'block';             //login
  btnlogado.style.display = statuslogin === false ? 'none' : 'block';  //login

  apibuscar.style.display = statuslogin === false ? 'none' : 'block';  //busca
  version.style.display = statuslogin ? 'none' : 'block';              //busca

  areaprincipal.style.display = statuslogin ? 'none' : 'block';        //busca
  areaimg.style.display = statuslogin ? 'none' : 'block';              //busca

  apiselect.style.display = statuslogin === false ? 'none' : 'block';  //select
};

//Função Login
button.addEventListener('click', async () => {
  //Validação de Campos
  if (input1.value == '') {
    alertmessage.innerHTML = 'Campo de usuario vazio.';
  } else if (input1.value.length > 0 && input1.value.length < 3) {
    alertmessage.innerHTML = 'Usuario com menos de 3 caracteres.';
  } else if (input2.value.length == '') {
    alertmessage.innerHTML = 'Campo de senha vazio.';
  } else {
    alertmessage.innerHTML = '';
  }

  const xmlhttp = new XMLHttpRequest(); //Permite que o script realize requisições HTTP partindo do cliente
  xmlhttp.open('POST', 'https://reqres.in/api/login', true); //XMLHttpRequest.open(method, url),Parametro da Requisição
  xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xmlhttp.send(JSON.stringify({ email: input1.value, password: input2.value }));
  //Callback AJAX
  xmlhttp.onreadystatechange = function () {
    //Estado da chamada, Status HTTP
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      localStorage.token = JSON.parse(xmlhttp.responseText).token;
      statuslogin = true;
      verificaLogin();
    } else if (xmlhttp.status === 400) {
      xmlhttp.send(null); //Realização da Requisição
    }
  };
});

verificaLogin();
