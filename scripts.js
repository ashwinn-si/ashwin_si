function myFunction() {
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.querySelector('.main');

    loaderContainer.style.display = 'none';
    content.classList.remove('hidden');
}

// Pass the function reference to setTimeout
setTimeout(myFunction, 5000);
