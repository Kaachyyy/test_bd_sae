const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Route POST - Envoyer une réponse
app.post('/submit', (req, res) => {
    const { nom, email, message } = req.body;

    db.run(
        'INSERT INTO reponses (nom, email, message) VALUES (?, ?, ?)',
        [nom, email, message],
        function(err) {
            if (err) return res.status(500).send(err.message);
            res.json({ id: this.lastID });
        }
    );
});

// Route GET - Récupérer toutes les réponses
app.get('/admin/reponses', (req, res) => {
    db.all('SELECT * FROM reponses ORDER BY created_at DESC', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`API: http://localhost:${port}`);
});