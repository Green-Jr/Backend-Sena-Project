export default function buildGetUserByIdController({ getUserById }) {
    return async function getUserByIdController(req, res) {
        try {
            const { id } = req.params;
            const response = await getUserById(id);
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    };
}
