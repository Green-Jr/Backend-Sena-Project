import express from 'express';
import controllers from '../controllers';
import authMiddleware from '../../application/middleware/authMiddleware';

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


export default router;
