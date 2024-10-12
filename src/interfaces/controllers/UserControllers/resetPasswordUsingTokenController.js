export default function buildResetPasswordUsingTokenController({ resetPasswordUsingToken }) {
    return async function resetPasswordUsingTokenController(req, res) {
        try {
            const { token, newPassword } = req.body;
            const response = await resetPasswordUsingToken({ token, newPassword });
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
