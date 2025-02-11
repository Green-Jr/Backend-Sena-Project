import express from 'express';
import controllers from '../controllers/index.js';
import authMiddleware from '../../application/middleware/authMiddleware.js';

const router = express.Router();

// Buscar productos en línea (sin autenticación)
router.get('/products/search', async (req, res) => {
    await controllers.searchProductsController(req, res);
});


// Agregar producto a favoritos (requiere autenticación)
router.post('/products/favorites', authMiddleware, async (req, res) => {
    await controllers.addProductToFavoritesController(req, res);
});



// Ruta para obtener los productos favoritos de un usuario
router.get('/products/Getfavorites', authMiddleware, async (req, res) => {
    await controllers.searchFavoritesProductsController(req, res);
    
});

// Ruta para eliminar un producto de favoritos (requiere autenticación)

router.delete('/products/favorites/:productId', authMiddleware, async (req, res) => {
    await controllers.removeProductFromFavoritesController(req, res);
});



export default router;
