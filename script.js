window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        const chargement = document.getElementById('charM');
        const pagePrincipale = document.getElementById('PageP');

        chargement.style.opacity = '0';

        setTimeout(() => {
            chargement.style.display = 'none';
            pagePrincipale.classList.remove('cache');
        },500);

    },3000);
});