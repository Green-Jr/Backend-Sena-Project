export default function buildDeleteUserController({ deleteUser }) {
    return async function deleteUserController(req, res) {
        try {
            const { id } = req.params;
            const response = await deleteUser(id);
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
