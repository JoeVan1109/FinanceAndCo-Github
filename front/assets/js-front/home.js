const calendar = document.querySelectorAll('.sous-card-down');

let elementActif = null;

calendar.forEach((element) => {
    element.addEventListener('click', () => {
        if (elementActif) {
            elementActif.classList.remove('green-active');
        }
        element.classList.add('green-active');

        elementActif = element;
    });
});