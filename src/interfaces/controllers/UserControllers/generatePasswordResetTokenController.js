export default function buildGeneratePasswordResetTokenController({ generatePasswordResetToken }) {
    return async function generatePasswordResetTokenController(req, res) {
        try {
            const { email } = req.body;
            const response = await generatePasswordResetToken({ email });
            res.status(response.statusCode).json(response.body);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
