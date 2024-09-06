const toggleButton = document.querySelector('.button-open');
const buttonText = toggleButton.textContent.trim();
const additionalBrands = document.querySelector('.brands__readnext__list');

toggleButton.addEventListener('click', function () {
    const buttonText = toggleButton.textContent.trim();

    if (buttonText === 'Показать все') {
        toggleButton.textContent = 'Скрыть';
        additionalBrands.classList.remove('brands__readnext__list_hidden');
    } else {
        toggleButton.textContent = 'Показать все';
        additionalBrands.classList.add('brands__readnext__list_hidden');
    }
});