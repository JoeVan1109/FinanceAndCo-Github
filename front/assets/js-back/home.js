import { APIBaseURL } from "./config.js";

import { APIBaseURL } from "./config.js";

import { APIBaseURL } from "./config.js";

export async function initHomePage() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        // Rediriger vers la page de connexion si l'ID n'est pas trouvé
        window.location.href = '/login.html';
        return;
    }

    try {
        // Récupérer les informations de l'utilisateur
        const userResponse = await fetch(`${APIBaseURL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        const userData = await userResponse.json();

        // Afficher le nom d'utilisateur
        const welcomeTitle = document.querySelector('.welcome-title');
        welcomeTitle.textContent = `Bienvenue, ${userData.username}`;

        // Récupérer les transactions de l'utilisateur
        const transactionsResponse = await fetch(`${APIBaseURL}/users/${userId}/transactions`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        const transactionsData = await transactionsResponse.json();

        // Utilisez transactionsData pour afficher les informations spécifiques à l'utilisateur
        // ...

    } catch (error) {
        console.error("Erreur lors de l'initialisation de la page d'accueil:", error);
    }
}

// Appeler la fonction d'initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initHomePage);

function displayRecentTransactions(transactions) {
    const containerFluxArgent = document.querySelector('.container-flux-argent');
    containerFluxArgent.innerHTML = ''; // Vider le conteneur

    // Trier les transactions par date (les plus récentes en premier)
    const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Afficher les 3 dernières transactions
    sortedTransactions.slice(0, 3).forEach(transaction => {
        const blocFluxArgent = document.createElement('div');
        blocFluxArgent.className = 'bloc-flux-argent';

        blocFluxArgent.innerHTML = `
            <div class="bloc-icone">
                <img class="icone-argent" src="../img/icones/${getTransactionIcon(transaction.category)}" alt="${transaction.category}-icone">
            </div>
            <div class="bloc-text">
                <p class="title-depense">${transaction.category}</p>
                <p class="date-depense">${formatDate(transaction.date)}</p>
            </div>
            <p class="detail">${transaction.description}</p>
            <p class="nbr-argent">${transaction.type === 'income' ? '' : '-'}$${transaction.amount.toFixed(2)}</p>
        `;

        containerFluxArgent.appendChild(blocFluxArgent);
    });
}

function getTransactionIcon(category) {
    // Logique pour déterminer l'icône en fonction de la catégorie
    switch (category.toLowerCase()) {
        case 'salary': return 'money.png';
        case 'groceries': return 'epicerie.png';
        case 'rent': return 'rent.png';
        default: return 'default.png';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')} - ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`;
}
