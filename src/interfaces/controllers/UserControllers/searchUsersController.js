export default function buildSearchUsersController({ searchUsers }) {
    return async function searchUsersController(req, res) {
        try {
            const { name } = req.query; // Extraer el nombre de los query params
            console.log('Name de la query',name);
            if (!name) {
                throw new Error('Name parameter is required');
            }

            const response = await searchUsers({ name }); // Pasar el nombre al caso de uso
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
