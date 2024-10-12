import express from 'express';
import controllers from '../controllers';
import authMiddleware from '../../application/middleware/authMiddleware';
import isAdminMiddleware from '../../application/middleware/isAdminMiddleware';

const router = express.Router();

// Crear un nuevo usuario (no requiere autenticación)
router.post('/users', async (req, res) => {
    try {
        console.log('Entrada a la ruta');
        await controllers.createUserController(req, res);
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Autenticar un usuario (no requiere autenticación)
router.post('/auth/login', async (req, res) => {
    try {
        await controllers.authenticateUserController(req, res);
    } catch (error) {
        console.error('Error authenticating user:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Actualizar perfil de usuario (requiere autenticación)
router.put('/users/:id/profile', authMiddleware, async (req, res) => {
    try {
        await controllers.updateUserController(req, res);
    } catch (error) {
        console.error('Error updating profile:', error.message);
        res.status(400).json({ error: error.message });
    }
});

// Solicitar token para resetear contraseña (no requiere autenticación)
router.post('/auth/request-reset-password', async (req, res) => {
    try {
        await controllers.generatePasswordResetTokenController(req, res);
    } catch (error) {
        console.error('Error requesting password reset token:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Cambiar contraseña usando el token
router.put('/auth/reset-password', async (req, res) => {
    try {
        await controllers.resetPasswordUsingTokenController(req, res);
    } catch (error) {
        console.error('Error resetting password:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Obtener todos los usuarios (requiere autenticación y ser admin)
router.get('/users', authMiddleware, isAdminMiddleware, async (req, res) => {
    try {
        await controllers.getAllUsersController(req, res);
    } catch (error) {
        console.error('Error getting all users:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Obtener un usuario por ID (requiere autenticación y ser admin)
router.get('/users/:id', authMiddleware, isAdminMiddleware, async (req, res) => {
    try {
        await controllers.getUserByIdController(req, res);
    } catch (error) {
        console.error('Error getting user by ID:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un usuario por ID (requiere autenticación y ser admin)
router.put('/users/:id', authMiddleware, isAdminMiddleware, async (req, res) => {
    try {
        await controllers.updateUserController(req, res);
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un usuario por ID (requiere autenticación y ser admin)
router.delete('/users/:id', authMiddleware, isAdminMiddleware, async (req, res) => {
    try {
        await controllers.deleteUserController(req, res);
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Buscar usuarios por nombre (requiere autenticación y ser admin)
router.get('/users/search', authMiddleware, isAdminMiddleware, async (req, res) => {
    try {
        const { name } = req.query; // Extraer el parámetro de consulta `name`
        const users = await controllers.searchUsersController({ name }); // Pasar `name` al caso de uso
        res.status(200).json(users);
    } catch (error) {
        console.error('Error while searching users by name:', error.message);
        res.status(500).json({ error: 'Failed to search users' });
    }
});




export default router;
