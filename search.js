let inputsearch = document.querySelector('input[type="text"]');
let buttonsearch = document.querySelector('#btn-search');
var container = document.querySelector("#ul-resultado-pesquisa");

buttonsearch.addEventListener("click", function () {
    var query = inputsearch.value;
    for (var i = 0; i < query; i++) {
        var li = document.createElement("li");
        axios
            .get("https://foodish-api.herokuapp.com/api/images/pizza")
            .then(function (res) {
                console.log(res.data.image);
                img = document.createElement("img");
                img.src = res.data.image;
                li.appendChild(img);
                container.appendChild(li);
            });
    }
}
);