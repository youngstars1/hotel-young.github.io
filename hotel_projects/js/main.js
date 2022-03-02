//*empecemos a agregar la clase con onclick

$(document).ready(function() {
    $('#barra').click(function() {
        $('.menu-lateral').toggleClass('abierto');
        $('#barra').toggleClass('abierto');
    })

    //! aqui trabajamos con el nav el cambio de color de back-ground
    //! aqui estamos quitando la clase transparente al elemento cuando llega en el id #visita
    $(window).on('scroll', function(){
       let posiciamiento = $('#vista').offset();
       if($(window).scrollTop() >= posiciamiento.top) {
           $('header').removeClass('transparente');
       }
       else{
        $('header').addClass('transparente');
       }
    })
 
    //!aqui empezamos a darle vida al scroll de hero
    $('a').on('click', function(){
        if(this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})