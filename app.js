const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');


const app = express();

// Connexion à la base de donnée MongoDB
mongoose.connect('mongodb+srv://admin:1230123.aA@cluster0.dt9ig.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Ajout des headers pour éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware qui transforme la réponse en json
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// Utilisation des routes
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
