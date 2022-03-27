
$(document).ready(function(){
    /* $(form).validate(form); */
   function valideForms(form) {
       $(form).validate({
           rules: {
               name: {
                   required: true,
                   minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                checkbox: "required",
            },
            messages: {
                name: {
                    required: "",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                email: {
                    required: "",
                    email: "Email введен не корректно !"
                },
                checkbox: {
                    required: "Примите условия !",
                    
                    
                }
            }
       })
   }
    valideForms('#contacts-form');
    
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
    
});



const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeElemList = document.querySelector('.menu__list')
    overlay = document.querySelector('.menu__overlay');
    
    
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener ('click', () => {
    menu.classList.remove('active');
});
closeElemList.addEventListener ('click', () => {
    menu.classList.remove('active');
});

// Удаление класса по нажатию ECS 
window.addEventListener ("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});
overlay.addEventListener ('click', () => {
    menu.classList.remove('active');
});
// Создание счетчика полосы
const counters = document.querySelectorAll('.progress__namber'),
        lines = document.querySelectorAll('.progress__divider span ');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;    
});

new WOW().init();
/* WOW = new WOW(
    {
    mobile: false, 
    }
            )
wow.init(); */




