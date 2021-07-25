let logado = localStorage.token !== undefined;

let input1 = document.querySelector('input[type="email"]');
let input2 = document.querySelector('input[type="password"]');
let button = document.querySelector('button[type="submit"]');

let alertmessage = document.querySelector('div[type="message"]');

const btnlogin = document.querySelector('#btnlogin');
const btnlogin2 = document.querySelector('#usuarioLogado');

let texto1 = input1.value;
let texto2 = input2.value;

//eve.holt@reqres.in
//cityslicka

const verificaLogin = () => {
  btnlogin.style.display = logado ? 'none' : 'block';
  btnlogin2.style.display = logado === false ? 'none' : 'block';
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
  xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xmlhttp.send(JSON.stringify({ email: input1.value, password: input2.value }));
  xmlhttp.onload = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      logado = true;
      verificaLogin();
    } else if (xmlhttp.status === 400) {
      xmlhttp.send(null);
    }
  };
});

verificaLogin();
