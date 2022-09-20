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
    if (darkmode.isActivated()) {
        $("nav").removeClass("bg-light").addClass("bg-dark");
        $(".navbar-brand").css("color", "white");
        $(".nav-link").css("color", "white");
        $(".navbar-toggler-icon").css("color", "white");
    } else {
        $("nav").removeClass("bg-dark").addClass("bg-light");
        $(".navbar-brand").css("color", "black");
        $(".nav-link").css("color", "black");
        $(".navbar-toggler-icon").css("color", "black");
    }
    $(".darkmode-toggle").on('click', function () {
        if (darkmode.isActivated()) {
            $("nav").removeClass("bg-light").addClass("bg-dark");
            $(".navbar-brand").css("color", "white");
            $(".nav-link").css("color", "white");
            $(".navbar-toggler-icon").css("color", "white");
        } else {
            $("nav").removeClass("bg-dark").addClass("bg-light");
            $(".navbar-brand").css("color", "black");
            $(".nav-link").css("color", "black");
            $(".navbar-toggler-icon").css("color", "black");
        }
    })
    //Inicializa contenedor leyes
    $("#ley_1").addClass("active-opciones")
    //Contenido de Imagen
    $("#leyes_imagen").html("<a target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'><img src='https://0.academia-photos.com/attachment_thumbnails/38219766/mini_magick20190226-12499-s4mjri.png?1551169058' alt='Ley General de Protección Datos' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
    //Contenido de texto
    $("#leyes_content").html("<h2 style='text-align:center;'>Ley general de protección de datos personales de México</h2>" +
        " <p style='text-align:justify ;'>México cuenta con una ley que regula el tratamiento de los datos personales por parte de empresas del sector privado" +
        " desde el 5 de julio de 2010, esa ley se llama Ley Federal de Protección de Datos Personales en Posesión de los" +
        " Particulares o Ley de Protección de Datos." +
        "<br>" +
        " Su aplicación determina que se evite que los datos personales sean utilizados indebidamente, que se respeten los" +
        " derechos de los dueños de los datos y que se garantice una expectativa razonable de privacidad. Quienes traten datos" +
        " personales deben tomar en cuenta las guías y documentos emitidos por el Instituto Nacional de Transparencia, Acceso" +
        " a la Información y Protección de Datos Personales ('INAI').</p>" +
        "<a style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'><i class='fa fa-external-link' aria-hidden='true'></i> Puede consultar la ley general de protección de datos personales de México aquí.</a>");
    //Inicializa contenedor estandares
    $("#est_1").addClass("active-opciones")
    //Contenido de Imagen
    $("#estandar_imagen").html("1");
    //Contenido de texto
    $("#estandar_content").html("1");

    //Eventos de menús internos
    $("#ley_1").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("<a target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'><img src='https://0.academia-photos.com/attachment_thumbnails/38219766/mini_magick20190226-12499-s4mjri.png?1551169058' alt='Ley General de Protección Datos' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#leyes_content").html("<h2 style='text-align:center;'>Ley general de protección de datos personales de México</h2>" +
            " <p style='text-align:justify ;'>México cuenta con una ley que regula el tratamiento de los datos personales por parte de empresas del sector privado" +
            " desde el 5 de julio de 2010, esa ley se llama Ley Federal de Protección de Datos Personales en Posesión de los" +
            " Particulares o Ley de Protección de Datos." +
            "<br>" +
            " Su aplicación determina que se evite que los datos personales sean utilizados indebidamente, que se respeten los" +
            " derechos de los dueños de los datos y que se garantice una expectativa razonable de privacidad. Quienes traten datos" +
            " personales deben tomar en cuenta las guías y documentos emitidos por el Instituto Nacional de Transparencia, Acceso" +
            " a la Información y Protección de Datos Personales ('INAI').</p>" +
            "<a style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'><i class='fa fa-external-link' aria-hidden='true'></i> Puede consultar la ley general de protección de datos personales de México aquí.</a>");
    })
    $("#ley_2").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_1").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("<a target='_blank' href='https://www.gob.mx/cms/uploads/attachment/file/645081/LFPPI.pdf'><img src='https://0.academia-photos.com/attachment_thumbnails/51862496/mini_magick20190124-29409-w2z0bl.png?1548336959' alt='Ley de Propiedad Industrial' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#leyes_content").html("<h2 style='text-align:center;'>Ley de Propiedad Industrial</h2>" +
            " <p style='text-align:justify ;'>El instrumento legal que protege la propiedad intelectual en el terreno de la invención, es la Ley de la Propiedad Industrial; cuyo campo de acción se haya en la industria y el comercio. La entidad que la regula es el Instituto Mexicano de la Propiedad Industrial; perteneciente a la Secretaría de Economía." +
            "<br>" +
            "</p>" +
            "<a style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' href='https://www.gob.mx/cms/uploads/attachment/file/645081/LFPPI.pdf'><i class='fa fa-external-link' aria-hidden='true'></i> Puede consultar la ley de propiedad industrial de México aquí.</a>");
    })
    $("#ley_3").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_1").removeClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("<a target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/122_010720.pdf'><img src='https://0.academia-photos.com/attachment_thumbnails/51165256/mini_magick20190126-25468-1lvdoyv.png?1548510919' alt='Ley Federal de Derechos de Autor' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#leyes_content").html("<h2 style='text-align:center;'>Ley Federal del Derecho de Autor</h2>" +
        " <p style='text-align:justify ;'>Se trata del instrumento a través del cual se protege el derecho de los autores en México. La Ley protege la forma en que se fija una obra y la originalidad. En el artículo 5 de esta Ley se señala que las obras están protegidas desde el momento que son “fijadas en un soporte material”; y que el reconocimiento de los derechos de autor y los derechos conexos no “requiere registro ni documento de ninguna especie; ni quedará subordinado al cumplimiento de formalidad alguna." +
        "<br>" +
        "</p>" +
        "<a style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/122_010720.pdf'><i class='fa fa-external-link' aria-hidden='true'></i> Puede consultar la ley federal del derecho de autor aquí.</a>");
    })
    $("#ley_4").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_1").removeClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html("<a target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf'><img src='https://0.academia-photos.com/attachment_thumbnails/61542999/mini_magick20191217-20898-1xqr8d3.png?1576614258' alt='Código Penal Federal' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#leyes_content").html("<h2 style='text-align:center;'>Código Penal Federal</h2>" +
        " <p style='text-align:justify ;'>El Código Penal Federal se aplica en toda la República Mexicana para los delitos del orden federal. En este código se encuentran previstos algunos de los delitos del orden federal, reglas generales sobre delitos y responsabilidad penal, penas y medidas de seguridad, y reglas sobre la aplicación de sanciones penales." +
        "<br>" +
        "</p>" +
        "<a style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf'><i class='fa fa-external-link' aria-hidden='true'></i> Puede consultar el Código Penal Federal aquí.</a>");
    })
    $("#est_1").on('click', function () {
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
    $("#est_2").on('click', function () {
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
    $("#est_3").on('click', function () {
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
    $("#est_4").on('click', function () {
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
    $("#est_5").on('click', function () {
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