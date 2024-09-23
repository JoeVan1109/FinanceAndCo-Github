import { initLoginForm } from './login.js';
import { initHomePage } from './home.js';
// import { initDashboard } from './dashboard.js';
// import { initTransactions } from './transactions.js';
// import { initBudgets } from './budgets.js';
// import { initGoals } from './goals.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Initialisation de application...');
        
        await initLoginForm();
        console.log('Formulaire de connexion initialisé');

        await initHomePage();
        console.log('Page d\'accueil initialisée');
        
        // // Ces initialisations ne devraient être appelées que si l'utilisateur est connecté
        // if (isUserLoggedIn()) {
        //     await initDashboard();
        //     console.log("Tableau de bord initialisé");
            
        //     await initTransactions();
        //     console.log("Fonctionnalité de transactions initialisée");
            
        //     await initBudgets();
        //     console.log("Fonctionnalité de budgets initialisée");

        //     await initGoals();
        //     console.log("Fonctionnalité d'objectifs financiers initialisée");
        // }
        
        console.log('Initialisation terminée avec succès');

    } catch (error) {
        console.error('Erreur lors de initialisation de application:', error);
    }
});

// function isUserLoggedIn() {
//     // Vérifiez ici si l'utilisateur est connecté (par exemple, en vérifiant un token dans localStorage)
//     return localStorage.getItem('userToken') !== null;
// }