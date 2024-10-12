import userRoutes from './userRoutes';
import productRoutes from './productRoutes';

export default function(app) {
    app.use('/api', userRoutes);      // Todas las rutas de usuarios bajo el prefijo /api
    app.use('/api', productRoutes);   // Todas las rutas de productos bajo el prefijo /api
}
