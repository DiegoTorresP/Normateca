function addDarkmodeWidget() {
    const options = {
        top: '64px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    }

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
    if(darkmode.isActivated()){
        $( "nav" ).removeClass( "bg-light" ).addClass( "bg-dark" );
        $(".navbar-brand").css("color","white");
        $(".nav-link").css("color","white");
        $(".navbar-toggler-icon").css("color","white");
    }else{
        $( "nav" ).removeClass( "bg-dark" ).addClass( "bg-light" );
        $(".navbar-brand").css("color","black");
        $(".nav-link").css("color","black");
        $(".navbar-toggler-icon").css("color","black");
    }
    $(".darkmode-toggle").on('click',function(){
        if(darkmode.isActivated()){
            $( "nav" ).removeClass( "bg-light" ).addClass( "bg-dark" );
            $(".navbar-brand").css("color","white");
            $(".nav-link").css("color","white");
            $(".navbar-toggler-icon").css("color","white");
        }else{
            $( "nav" ).removeClass( "bg-dark" ).addClass( "bg-light" );
            $(".navbar-brand").css("color","black");
            $(".nav-link").css("color","black");
            $(".navbar-toggler-icon").css("color","black");
        }
    })
    //Inicializa contenedor leyes
    $("#ley_1").addClass("active-opciones")
    //Contenido de Imagen
    $("#leyes_imagen").html("1");
    //Contenido de texto
    $("#leyes_content").html("1");
    //Inicializa contenedor estandares
    $("#est_1").addClass("active-opciones")
    //Contenido de Imagen
    $("#estandar_imagen").html("1");
    //Contenido de texto
    $("#estandar_content").html("1");

    //Eventos de menús internos
    $("#ley_1").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("1");
        //Contenido de texto
        $("#leyes_content").html("1");
    })
    $("#ley_2").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_1").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("2");
        //Contenido de texto
        $("#leyes_content").html("2");
    })
    $("#ley_3").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_1").removeClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("3");
        //Contenido de texto
        $("#leyes_content").html("3");
    })
    $("#ley_4").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_1").removeClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("4");
        //Contenido de texto
        $("#leyes_content").html("4");
    })
    $("#est_1").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("1");
        //Contenido de texto
        $("#estandar_content").html("1");
    })
    $("#est_2").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("2");
        //Contenido de texto
        $("#estandar_content").html("2");
    })
    $("#est_3").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("3");
        //Contenido de texto
        $("#estandar_content").html("3");
    })
    $("#est_4").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("4");
        //Contenido de texto
        $("#estandar_content").html("4");
    })
    $("#est_5").on('click',function(){
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("5");
        //Contenido de texto
        $("#estandar_content").html("5");
    })
}
window.addEventListener('load', addDarkmodeWidget);