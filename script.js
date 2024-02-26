const inputCheck = document.querySelector('#theme-light');
const element = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    element.setAttribute("data-bs-theme", modo)
});