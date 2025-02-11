import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from '../interfaces/routes/userRoutes.js';
import productRoutes from '../interfaces/routes/productRoutes.js';
import sequelize from '../infrastructure/Config/database.js';
import cors from 'cors';

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

console.log("Allowed Frontend Origin: ", process.env.FRONTEND);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || origin === process.env.FRONTEND) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));

app.options("*", cors());

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

