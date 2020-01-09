$(function(){

    /*-------------------------------------------------------
    1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------*/

    /* Insertar y quitar ".icono-cerrar" al boton del menu */
    $('#menu-navegacion .navbar-toggler').click(function(){
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /* Al hacer click en un enlace del menu principal */
    $('#menu-navegacion .navbar-nav a').click(function(){
        /* 1) Quitar la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /* 2) Contraemos el menu*/
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*-------------------------------------------------------
    2. Inicializando Swiper
    -------------------------------------------------------*/
    var swiper = new Swiper('.swiper-container', {
        /* Botones de navegacion */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        /* Botones paginacion */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 10000,
        },
        keyboard: {
            enable: true,
            onlyInViewport: true,
        }
    });

    /*-------------------------------------------------------
    3. Inicializando Venobox
    -------------------------------------------------------*/
    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255, 255, 255, 0.4)',
        border: '5px',
        closeBackground: 'red',
        closeColor: '#fff',
        spinner: 'three-bounce',
        titleattr: 'title'
    });

    /*-------------------------------------------------------
    4. Inicializando jQuery CounterUp
    -------------------------------------------------------*/
    $('.counter').counterUp();

    /*-------------------------------------------------------
    5. Inicializando "picker.date.js"
    -------------------------------------------------------*/
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd, dd !de mmmm !de yyyy',
        formatSubmit: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true,
        max: 30,
        onStart: function () {
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });

    /*-------------------------------------------------------
    6. Inicializando "picker.time.js"
    -------------------------------------------------------*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        format: 'hh:i A',
        interval: 60,
        min: [8, 00],
        max: [18, 00]

    });

    /*-------------------------------------------------------
    7. INICIANDO "parsley.js"
    -------------------------------------------------------*/
    $('#formulario-contacto').parsley({
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger: 'change',
        triggerAfterFailure: 'change'

    });

    /*-------------------------------------------------------
    8. Inicializando jQuery Stickit
    -------------------------------------------------------*/
    $('#menu-navegacion').stickit({
        className: 'menu-fijo'
    });

    /*-------------------------------------------------------
    9. Inicializando PageScroll2id
    -------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass: "active"
    });

})