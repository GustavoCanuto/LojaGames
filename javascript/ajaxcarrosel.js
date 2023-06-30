$(document).ready(function () {
    $(document).on('click', 'a.carrossel-link', function (event) {
        event.preventDefault();
        var link = $(this).attr("href");
        carregarConteudoPorURL(link);
    });

    function carregarConteudoPorURL(url) {
        $.ajax({
            url: url,
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
});