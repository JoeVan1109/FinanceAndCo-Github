# Finance And Co

- Lien maquette figma : https://www.figma.com/design/xwLGyOZ4xgFFCIvlexwfXi/Finance-Management-Mobile-App-UI-UX-Kit-for-Budget-Tracker-Financial-Prototype-Design-(Community)?node-id=7035-4&node-type=frame&t=neCDPMHNvfwMxDck-0

## LOGO

![Logo green](assets\logo-green.svg)
![Logo black](assets\logo-black.svg)

## FONT

| Font  | Import         | Style |
| :--------------- |:---------------:| -----:|
| Poppins  |   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');    | font-family: "Poppins", sans-serif; |
| League Spartan | @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap'); | font-family: "League Spartan", sans-serif; |

## TECHNO

- SASS
- JAVASCRIPT
- NODE.JS
- API REST

FinanceAndCo-Github/
│
├── back/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── data/
│   │   ├── routers/
│   │   │   └── accueil-router.js
│   │   │   └── login-router.js 
|   |   |── index-router.js
|   |   |── database.js
│   │   ├── error/
│   │   │   ├── errorhandler.js
│   │   │   └── httperror.js
│   │   └── app.js
│   ├── public/
│   └── views/
│   |    ├── index.ejs
│   |    ├── 404.ejs
│   |    └── error.ejs
│   └── package.json
│
├── front/
│   ├── assets/
│   │── css/
│   │   └── style.css
│   ├── html/
│   │   └── index.html
|   |   └── autre-fichier.html
│   └── views/
│   |    ├── index.ejs
│   |    ├── 404.ejs
│   |    └── error.ejs
|   |    └── autre-fichier.ejs
│   └── package.json
    └── vite.config.js
│
├── index.js
├── package.json
├── .env
└── netlify.toml
└──eslint.config-.js
└──README.md
└──.gitignore
