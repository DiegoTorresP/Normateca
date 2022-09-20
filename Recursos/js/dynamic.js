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
    });

    //const height = $(window).height();
    //$('#divContenido').height(height);

    //Inicializa contenedor leyes
    const sImgLey1 = "<a target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'><img src='https://0.academia-photos.com/attachment_thumbnails/38219766/mini_magick20190226-12499-s4mjri.png?1551169058' alt='Ley General de Protección Datos' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>",
        sTxtLey1 = "<h2 style='text-align:center;'>Ley general de protección de datos personales de México</h2>" +
            " <p style='text-align:justify ;'>México cuenta con una ley que regula el tratamiento de los datos personales por parte de empresas del sector privado" +
            " desde el 5 de julio de 2010, esa ley se llama Ley Federal de Protección de Datos Personales en Posesión de los" +
            " Particulares o Ley de Protección de Datos." +
            "<br>" +
            " Su aplicación determina que se evite que los datos personales sean utilizados indebidamente, que se respeten los" +
            " derechos de los dueños de los datos y que se garantice una expectativa razonable de privacidad. Quienes traten datos" +
            " personales deben tomar en cuenta las guías y documentos emitidos por el Instituto Nacional de Transparencia, Acceso" +
            " a la Información y Protección de Datos Personales ('INAI').</p>" +
            "<a style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' href='http://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'><i class='fa fa-external-link' aria-hidden='true'></i> Puede consultar la ley general de protección de datos personales de México aquí.</a>";

    $("#ley_1").addClass("active-opciones")
    //Contenido de Imagen
    $("#leyes_imagen").html(sImgLey1);
    //Contenido de texto
    $("#leyes_content").html(sTxtLey1);
    //Inicializa contenedor estandares
    const sTxtEst1 = "<a target='_blank' rel='noopener noreferrer' href='https://www.academia.edu/26325423/Implementaci%C3%B3n_efectiva_de_un_SGSI_ISO_27001'><img src='https://0.academia-photos.com/attachment_thumbnails/61655663/mini_magick20200101-21172-14ajqtv.png?1577933923' alt='Implementación de la Norma ISO 2700' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>",
        sImgEst1 = "<h2 style='text-align:center;'>ISO 27001</h2> " +
            "<p style='text-align:justify;'>ISO 27001 es una norma internacional que permite el aseguramiento, la confidencialidad e integridad de los datos y de " +
            "la información, así como de los sistemas que la procesan." +
            "<br>" +
            "El estándar ISO 27001 para los Sistemas Gestión de la Seguridad de la Información permite a las organizaciones la " +
            "evaluación del riesgo y la aplicación de los controles necesarios para mitigarlos o eliminarlos." +
            "<br>" +
            "La aplicación de esta norma significa una diferenciación respecto al resto, que mejora la competitividad y la imagen de una organización." +
            "<br>" +
            "La Gestión de la Seguridad de la Información se complementa con las buenas prácticas o controles establecidos en la norma ISO 27002.</p>" +
            "<p style='font-weight:bold;'>Puede consultar más detalles, los fundamentos de la norma ISO 27001 y su implmentación:</p>" +
            "<a href='https://www.iso.org/standard/54534.html' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> ISO/IEC 27001:20131</a>" +
            "<br>" +
            "<a href='https://normaiso27001.es/' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> NORMA ISO 27001</a>" +
            "<br>" +
            "<a href='https://www.redalyc.org/pdf/849/84921327061.pdf' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> Fundamentos de ISO 27001 y su aplicación en las empresas</a>" +
            "<br>" +
            "<a href='https://www.academia.edu/26325423/Implementaci%C3%B3n_efectiva_de_un_SGSI_ISO_27001' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> Implementación efectiva de un SGSI ISO 27001</a>";

    $("#est_1").addClass("active-opciones")
    //Contenido de Imagen
    $("#estandar_imagen").html(sTxtEst1);
    //Contenido de texto
    $("#estandar_content").html(sImgEst1);

    //Eventos de menús internos
    $("#ley_1").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#ley_2").removeClass("active-opciones");
        $("#ley_3").removeClass("active-opciones");
        $("#ley_4").removeClass("active-opciones");
        //Contenido de Imagen
        $("#leyes_imagen").html(sImgLey1);
        //Contenido de texto
        $("#leyes_content").html(sTxtLey1);
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
        $("#estandar_imagen").html(sTxtEst1);
        //Contenido de texto
        $("#estandar_content").html(sImgEst1);
    })
    $("#est_2").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("<a target='_blank' rel='noopener noreferrer' href='http://www.secureict.co.za/wp-content/uploads/2018/06/03_ins_info_security_iso_17799_1101-1.pdf'><img src='https://img.yumpu.com/40326203/1/500x640/information-security-management-understanding-iso-17799-gta.jpg' alt='ISO 17799' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#estandar_content").html("<h2 style='text-align:center;'>ISO 17799</h2>" +
            "<p style='text-align:justify;'>La norma ISO 17799 es un estándar internacional de alto nivel para la administración de la seguridad de la información, " +
            "orientada a preservar principios como: la <b>Confidencialidad</b>, que asegura que únicamente el personal autorizado tenga acceso " +
            "a la información, la <b>Integridad</b> que garantiza que la información no será alterada, eliminada o destruida por entidades no " +
            "autorizadas y <b>Disponibilidad</b> que asegura que los usuarios autorizados tendrán acceso a la información cuando la requieran." +
            "<br/>" +
            "La norma ISO 17799 va dirigida a cualquier tipo de organización o de compañía, privada o pública. Si la organización utiliza " +
            "sistemas internos o externos que poseen información confidencial, si depende de estos sistemas para el funcionamiento " +
            "normal de sus operaciones o si simplemente desea probar su nivel de seguridad de la información conformándose a una norma " +
            "reconocida, la norma BS 7799 / ISO 17799 particularmente pasa a ser muy interesante.</p>" +
            "<p style='font-weight:bold;'>Para consultar más detalles sobre la norma ISO 17799:</p>" +
            "<a href='https://www.iso.org/standard/39612.html' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> ISO/IEC 17799:2005</a>" +
            "<br>" +
            "<a href='https://aisel.aisnet.org/cgi/viewcontent.cgi?article=3154&context=cais' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> ISO 17799: \"Best Practices\" in Information Security Management?" +
            "<br>" +
            "<a href='http://www.secureict.co.za/wp-content/uploads/2018/06/03_ins_info_security_iso_17799_1101-1.pdf' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> Information security management: understanding ISO 17799</a>");
    });
    $("#est_3").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("<a target='_blank' rel='noopener noreferrer' href='https://core.ac.uk/download/pdf/301361993.pdf'><img src='https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/a382ea40aee360e14ecb724860383adb/thumb_1200_1553.png' alt='COBIT' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#estandar_content").html("<h2 style='text-align:center;'>COBIT</h2>" +
            "<p style='text-align:justify;'>COBIT (Control Objectives for Information and related Technology) es una guía de mejores prácticas " +
            "presentada como framework, dirigida al control y supervisión de tecnología de la información y que incluye un resumen ejecutivo, objetivos de control, mapas de auditoría, herramientas de implementación y " +
            "técnicas de gestión." +
            "<br/>" +
            "La misión de COBIT es \"investigar, desarrollar, publicar y promocionar un conjunto de objetivos de control generalmente aceptados para " +
            "las tecnologías de la información que sean autorizados, actualizados, e internacionales para el uso del " +
            "día a día de los gestores de negocios(también directivos) y auditores\". Gestores, auditores, y usuarios se benefician del desarrollo de " +
            "COBIT porque les ayuda a entender sus Sistemas de Información y decidir el nivel de seguridad y control " +
            "que es necesario para proteger los activos de sus compañías.</p>" +
            "<p style='font-weight:bold;'>Para consultar más sobre COBIT:</p>" +
            "<a href='https://www.globalsuitesolutions.com/es/que-es-cobit/' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> ¿Qué es COBIT y para qué sirve?</a>" +
            "<br>" +
            "<a href='https://ieeexplore.ieee.org/abstract/document/1265566' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> COBIT and its utilization: a framework from the literature" +
            "<br>" +
            "<a href='https://core.ac.uk/download/pdf/301361993.pdf' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> IT governance frameworks and COBIT</a>" +
            "<br>" +
            "<a href='https://core.ac.uk/download/pdf/301361993.pdf' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> COBIT® 2019 FRAMEWORK: Introduction and Methodology</a>");
    });
    $("#est_4").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        $("#est_5").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("<a target='_blank' rel='noopener noreferrer' href='https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf'><img src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmQQo3dPA-Nkm3xr2kC5sNVsCwEYNLLDhu5F_c26xmMCTDjwLmkIbQVd8wv0TmOEUyEQNRwOwd0=w1903-h877' alt='NIST' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#estandar_content").html("<h2 style='text-align:center;'>NIST</h2>" +
            "<p style='text-align:justify;'>NIST Cybersecurity Framework es un conjunto de pautas para mitigar los riesgos de ciberseguridad organizacional, publicado por el US National Institute of Standards and Technology (NIST), basado en estándares, pautas y " +
            "prácticas existentes. El marco \"proporciona una taxonomía de alto nivel de los resultados de la ciberseguridad y una metodología para evaluar y gestionar esos resultados\", además de orientación sobre la protección de la " +
            "privacidad y las libertades civiles en un contexto de ciberseguridad. Es utilizado por varios gobiernos y una amplia gama de empresas y organizaciones." +
            "<br/>" +
            "El marco está diseñado para que las empresas individuales y otras organizaciones evalúen los riesgos a los que se enfrentan. Los cambios incluyen orientación sobre cómo realizar autoevaluaciones, detalles adicionales " +
            "sobre la gestión de riesgos de la cadena de suministro, orientación sobre cómo interactuar con las partes interesadas de la cadena de suministro y fomenta un proceso de divulgación de vulnerabilidades." +
            "<br/>" +
            "El marco de ciberseguridad del NIST organiza su material \"básico\" en cinco funciones: identificar, proteger, detectar, responder y recuperar." +
            "</p> " +
            "<p style='font-weight:bold;'>Para consultar más sobre NIST, los recursos y documentación disponible:</p>" +
            "<a href='https://www.nist.gov/cyberframework' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> NIST | Official website</a>" +
            "<br>" +
            "<a href='https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> NIST Version 1.1</a>");
    });
    $("#est_5").on('click', function () {
        //Remueve seleccion de otras opciones y selecciona esa
        $(this).addClass("active-opciones");
        $("#est_2").removeClass("active-opciones");
        $("#est_3").removeClass("active-opciones");
        $("#est_4").removeClass("active-opciones");
        $("#est_1").removeClass("active-opciones");
        //Contenido de Imagen
        $("#estandar_imagen").html("<a target='_blank' rel='noopener noreferrer' href='https://worldaedait.com.mx/wp-content/uploads/2019/09/ITIL-4-Foundation-Material-Participante.pdf'><img src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmSesfhGyOC6EpcEAGLTnmnzkgpwl17VPoKKMoEDjvJ6ZCYZXIHZjAkt_2Qo99moCTicV5pW5CE=w1903-h877' alt='ITIL' style='max-width:300px ; min-width:150px ; max-height:338px ; min-height:194px ;background-color: white' class='' /></a>");
        //Contenido de texto
        $("#estandar_content").html("<h2 style='text-align:center;'>ITIL</h2>" +
            "<p style='text-align:justify;'>ITIL (Information Technology Infrastructure Library) es una guía de buenas prácticas para la gestión de servicios de tecnologías de la información, elaborada para abarcar toda la infraestructura, " +
            "desarrollo y operaciones de TI y gestionarla hacia la mejora de la calidad del servicio. Permite que las organizaciones y los individuos ofrezcan una gestión de servicios de TI (IT Service Management, ITSM) rentable y alineada " +
            "con la visión, la estrategia y el crecimiento de la empresa, y actúa como un único punto de contacto entre el proveedor de servicios y los usuarios finales. En tanto, la norma ITIL guía la forma en que se gestionan y prestan los servicios de TI y sus mejores prácticas modelan la transformación digital y las iniciativas tecnológicas. " +
            "Las empresas adoptan esta biblioteca para obtener beneficios más rápidamente con procesos definidos y habilitados por la tecnología adecuada. ITIL busca la optimización de los recursos y revisa continuamente los procesos existentes " +
            "para mejorarlos." +
            "<br/>" +
            "<p style='font-weight:bold;'>Para consultar más sobre NIST, los conceptos y componentes:</p>" +
            "<a href='https://www.itil.com.mx/' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> ITIL 4</a>" +
            "<br>" +
            "<a href='https://worldaedait.com.mx/wp-content/uploads/2019/09/ITIL-4-Foundation-Material-Participante.pdf' style='font-weight:bold;font-size: smaller;text-decoration:none' target='_blank' rel='noopener noreferrer'><i class='fa fa-external-link' aria-hidden='true'></i> ITIL 4 Foundation - WORLD AEDA IT</a>");
    })
}
window.addEventListener('load', addDarkmodeWidget);