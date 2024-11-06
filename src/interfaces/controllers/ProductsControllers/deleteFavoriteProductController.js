export default function buildRemoveProductFromFavoritesController({ removeProductFromFavorites }) {
    return async function removeProductFromFavoritesController(req, res) {
        try {
            const { productId } = req.params; 
            const token = req.headers.authorization.split(' ')[1]; 

            const response = await removeProductFromFavorites(productId, token); 
            res.status(response.statusCode).json(response.body); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
