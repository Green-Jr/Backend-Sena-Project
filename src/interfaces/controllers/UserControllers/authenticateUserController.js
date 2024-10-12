export default function buildAuthenticateUserController({ authenticateUser }) {
    return async function authenticateUserController(req, res) {
        try {
            const { email, password } = req.body;
            const response = await authenticateUser({ email, password });
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    };
}
