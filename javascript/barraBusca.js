function barraDePesquisa() {
    const pesquisa = document.getElementById('barraPesquisa').value;
    if (pesquisa == "nintendo") {

        $.ajax({
            url: "catalogo/nintendo.html",
            success: function (response) {
                $("#conteudo").html(response);
            }
        });


    } else if (pesquisa == "xbox") {

        $.ajax({
            url: "catalogo/xbox.html",
            success: function (response) {
                $("#conteudo").html(response);
            }
        });

    } else if (pesquisa == "playstation") {


        $.ajax({
            url: "catalogo/play.html",
            success: function (response) {
                $("#conteudo").html(response);
            }
        });


    } else if (pesquisa == "pc" || pesquisa == "steam") {


        $.ajax({
            url: "catalogo/pc.html",
            success: function (response) {
                $("#conteudo").html(response);
            }
        });


    }
}

