    $.ajax({
        url : 'api/usuarios',
        type : "GET",
    }).done(function(resp) {
        $("#usuarios").html(resp);
    });

    $("#pesquisar").click(function() {
        $.ajax({
            url : 'api/usuarios',
            type : "GET",
            data : {
                name : $("#search").val()
            }
        }).done(function(resp) {
            $("#usuarios").html(resp);
        });
    });
