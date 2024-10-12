const jwt = require('jsonwebtoken');
const User = require('../../domain/models/user'); // Asegúrate de importar el modelo de usuario

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Authorization header missing or malformed');
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decodedToken.userId);

    if (!user) {
      throw new Error('User not found');
    }

    req.user = user; // Añadimos el usuario a la solicitud para usarlo más adelante
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
