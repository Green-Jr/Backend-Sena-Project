export default function buildCreateUserController({ createUser }) {
    return async function createUserController(req, res) {
        try {
            console.log('entrada al controlador');
            const result = await createUser(req.body);
            res.status(result.statusCode).json(result.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
