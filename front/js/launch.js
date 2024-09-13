document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const containerLaunch = document.querySelector('.container-launch');
        const containerLaunchIdentify = document.querySelector('.container-launch-identify');
        
        if (containerLaunch && containerLaunchIdentify) {
            containerLaunch.classList.add('deplace-gauche');
            containerLaunchIdentify.classList.add('deplace-centre');
        } else {
            console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        }
    }, 3000);
});