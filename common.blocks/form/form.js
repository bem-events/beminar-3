$('.form').on('submit', function(e) {
    e.preventDefault();
    $('.form__popup', this)[
        !/\S+@\S+\.\S+/.test($('.form__input_type_email', this).val()) ? 'addClass' : 'removeClass'
    ]('form__popup_visible');
});
