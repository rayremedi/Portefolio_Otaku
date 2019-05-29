function toggleForm() {
    var formulaire = document.querySelector('.formulaire');
    if (formulaire.style.display == 'block') {
        formulaire.style.display = 'none';

    } else {
        formulaire.style.display = 'block';
    }
}

// TOGGLE DARK NIGHT //
$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('.Body').addClass('dark');
    } else {
        $('.Body').removeClass('dark');
    }
})