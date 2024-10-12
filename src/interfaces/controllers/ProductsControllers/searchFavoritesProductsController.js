export default function buildGetFavoriteProductsController({ getFavoriteProducts }) {
    return async function getFavoriteProductsController(req, res) {
        try {
            // Extraer el token JWT del encabezado de autorización
            const token = req.headers.authorization.split(' ')[1]; // Asumimos que viene en el formato 'Bearer TOKEN'

            if (!token) {
                throw new Error('Authorization token is required');
            }

            // Pasar el token al caso de uso
            const response = await getFavoriteProducts(token); // Pasamos el token al caso de uso, no el userId de los params
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
