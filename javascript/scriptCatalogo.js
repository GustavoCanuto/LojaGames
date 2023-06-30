let mostrador = document.getElementById("mostrador");
let selecao = document.getElementById("selecao");
let imgSelecionada = document.getElementById("img");
let itemSelecionado = document.getElementById("jogo");
let descriSelecionada = document.getElementsByClassName("descricao");
let precoSelecionado = document.getElementById("preço");

function carregar(objeto) {
    fecharBordes();
    mostrador.style.width = "60%";
    selecao.style.width = "40%";
    selecao.style.opacity = "1";
    objeto.style.border = "2px solid coral";

    imgSelecionada.src = objeto.getElementsByTagName("img")[0].src;

    itemSelecionado.innerHTML = objeto.getElementsByTagName("p")[0].innerHTML;

    precoSelecionado.innerHTML = objeto.getElementsByTagName("span")[0].innerHTML;
}
function fecharBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

function fechar() {
    mostrador.style.width = "100%";
    selecao.style.width = "0%";
    selecao.style.opacity = "0";

}