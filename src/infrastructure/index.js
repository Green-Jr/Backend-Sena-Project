import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from '../interfaces/routes/userRoutes';
import productRoutes from '../interfaces/routes/productRoutes';
import sequelize from '../infrastructure/Config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2700;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Configurar morgan para registrar todas las solicitudes
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

// Añadir un middleware para registrar los cuerpos de las solicitudes
app.use((req, res, next) => {
    console.log('Query Params:', req.query);
    console.log('Request Body:', req.body);
    next();
});

// Probar la conexión usando la instancia de Sequelize ya configurada
sequelize.authenticate()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((error) => console.error('Error connecting to PostgreSQL:', error));

// Routes 
app.use('/api', userRoutes);      // Todas las rutas de usuarios bajo el prefijo /api
app.use('/api', productRoutes);   // Todas las rutas de productos bajo el prefijo /api

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});