/*
Ici on va siplement créer le serveur HTTP en utilisant le module natif de node
et lui passer l'application express en paramètre.

https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

Cela facilera plus tard les tests de notre application en nous permettant
d'utiliser un serveur de test indépendant.
*/

import 'dotenv/config';
import { createServer } from 'node:http';
import { app } from './back/app/app.js';

const PORT = process.env.PORT ?? 3000;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

