export default function buildUpdateUserController({ updateUser }) {
    return async function updateUserController(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const response = await updateUser(id, updateData);
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
