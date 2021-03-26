const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // On récupère le token
    const token = req.headers.authorization.split(' ')[1];

    // On décode le token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

    // On compare le token récupéré avec celui de l'utilisateur
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: new Error('Invalid request!') });
  }
};
