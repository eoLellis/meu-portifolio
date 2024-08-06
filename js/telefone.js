document.addEventListener("DOMContentLoaded", function() {
    var phoneInput = document.querySelector('.phone-input');

    phoneInput.addEventListener('input', function(event) {
        var input = event.target;

        // Remove todos os caracteres que não sejam números
        var sanitized = input.value.replace(/\D/g, '');

        // Aplica a máscara se houver números
        var formatted = '';
        if (sanitized.length > 0) {
            if (sanitized.length < 3) {
                formatted = '(' + sanitized;
            } else if (sanitized.length < 6) {
                formatted = '(' + sanitized.substring(0, 2) + ') ' + sanitized.substring(2);
            } else if (sanitized.length < 11) {
                formatted = '(' + sanitized.substring(0, 2) + ') ' + sanitized.substring(2, 6) + '-' + sanitized.substring(6);
            } else {
                formatted = '(' + sanitized.substring(0, 2) + ') ' + sanitized.substring(2, 7) + '-' + sanitized.substring(7, 11);
            }
        }

        // Atualiza o valor do campo com a formatação
        input.value = formatted;
    });
});