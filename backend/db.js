const sqlite3 = require('sqlite3').verbose();

// Connexion à la BDD
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) console.error('Erreur BDD:', err.message);
    else console.log('BDD connectée !');
});

// Création des tables
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS reponses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;