document.querySelectorAll('img[data-placeholder]').forEach((image) => {
    image.addEventListener('error', () => {
        image.hidden = true;
        image.parentElement.classList.add('is-empty');
    });
});