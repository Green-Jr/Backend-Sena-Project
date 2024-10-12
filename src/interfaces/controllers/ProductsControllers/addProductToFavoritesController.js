export default function buildAddProductToFavoritesController({ addProductToFavorites }) {
    return async function addProductToUserController(req, res) {
        try {
            const productData = req.body; // Datos del producto desde el body
            const token = req.headers.authorization.split(' ')[1];
            const response = await addProductToFavorites(productData, token); // No necesitamos userId de los params
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
