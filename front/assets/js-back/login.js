import { APIBaseURL } from './config.js';

export function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${APIBaseURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        // Log de la réponse pour le débogage
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            throw new Error(errorData.message || 'Erreur de connexion');
        }

        const user = await response.json();
        console.log('User data:', user);

        // Stockez l'ID de l'utilisateur dans le localStorage
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('userToken', userData.token); // Si vous utilisez un token


        // Redirection vers la page d'accueil ou le tableau de bord
        window.location.href = '../html/home.html'; // Ajustez le chemin selon votre structure

    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        alert(error.message || 'Identifiants incorrects');
    }
}