window.addEventListener('load', function() {
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.querySelector('.main');

    loaderContainer.style.display = 'none';
    content.classList.remove('hidden');
});