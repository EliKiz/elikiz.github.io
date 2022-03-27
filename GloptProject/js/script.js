const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    closeElemLink = document.querySelector('.menu__list');
    overlay = document.querySelector('.menu__overlay')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
       /*Создание функции на выключение меню при клике на ссылку  */
closeElemLink.addEventListener('click', () => {
    menu.classList.remove('active');
});
     /*Создание функции на выключение меню при клике вне меню  */
overlay.addEventListener ('click', () => {
    menu.classList.remove('active');
});

const slider = tns({
    container: '.reviev__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev'); 
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next'); 
});

$(document).ready(function(){
    function validateForms(form){
     $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 4,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуста введите свое имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа!!!")
              },
            phone: {
                required: "Пожалуста введите номер телефона",
                minlength: jQuery.validator.format("Введите минимум {0} символа!!!")
            },
            email: {
              required: "Пожалуста введите свой email",
              email: "Пример name@domain.com"
            }
        }
    });
};
validateForms('#consultation-form');
validateForms('#contacts-form');
    $('input[name=phone]').mask("+7 (999) 999-99-99")
    
    /* Send letters on email */
    $('form').submit(function (e){
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
    
    /* $('form').submit(function(e){
        e.preventDefault();
        if(!$(this).valid()) {
            return;
        }
    }); */

    /* Modal window */
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #thanks').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });


});
