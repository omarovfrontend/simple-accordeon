document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('accordeon__btn')) {
        event.target.classList.toggle('active');
    }
});
