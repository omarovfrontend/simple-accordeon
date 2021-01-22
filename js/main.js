document.body.addEventListener('click', function({ target }) {
    if (target.classList.contains('accordeon__btn')) {
        target.classList.toggle('active');
    }
});
