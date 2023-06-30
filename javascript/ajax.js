jQuery(document).ready(function ($) {
    // Função para carregar o conteúdo do carrosel.html
    function carregarConteudo() {
        $.ajax({
            url: 'carrossel.html',
        })
            .done(function (html) {
                $("#conteudo").empty().append(html);
            })
            .fail(function () {
                console.log("erro");
            })
            .always(function () {
                console.log("complete");
            });
    }

    // Carregar conteúdo ao carregar a página
    carregarConteudo();

    // Manipulador de evento para o clique em link
    $("a").click(function (event) {
        link = $(this).attr("href");
        $.ajax({
            url: link,

        })
            .done(function (html) {
                $("#conteudo").empty().append(html);

            }
            )
            .fail(function () {
                console.log("erro");
            })
            .always(function () {
                console.log("complete");

            });
        return false;

    });

});
