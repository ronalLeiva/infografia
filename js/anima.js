$(document).ready(function() {

    $(":input").click(function(){
        $("#audio").get(0).play();
    });
    $("body").click(function(){
        $("#audio").get(0).play();
    });

    var $target = $('.peques > .izq, .peques > .der, .completo >.col-completo').children();

    $($target).hover(function() {
            console.log(this);
            $(this, '.contenido').animate({ 'opacity': '1' }, 100);
            $(this).siblings('#tituloP').removeClass('tituloP');
            $(this).siblings('#tituloP').addClass('tituloParriba');
        },
        function() {
            $('.contenido').animate({ 'opacity': '0' }, 100);
            $(this).siblings('#tituloP').removeClass('tituloParriba');
            $(this).siblings('#tituloP').addClass('tituloP');
        });

});