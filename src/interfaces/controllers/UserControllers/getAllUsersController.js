export default function buildGetAllUsersController({ getAllUsers }) {
    return async function getAllUsersController(req, res) {
        try {
            const response = await getAllUsers();
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
