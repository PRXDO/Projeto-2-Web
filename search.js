let inputsearch = document.querySelector('input[type="text"]');
let buttonsearch = document.querySelector('#btn-search');
var container = document.querySelector("#ul-resultado-pesquisa");
var select = document.querySelector("#select");


buttonsearch.addEventListener("click", function () {
    var query1 = inputsearch.value;
    var query2 = select.value;
    for (var i = 0; i < query1; i++) {
        axios.get("https://foodish-api.herokuapp.com/api/images/" + query2)
            .then(function (res) {
                console.log(res.data.image);
                img = document.createElement("img");
                img.src = res.data.image;
                container.appendChild(img);
            });
    }
}
);