import jwt from 'jsonwebtoken';

export default function buildGeneratePasswordResetToken({ userRepository }) {
    return async function generatePasswordResetToken({ email }) {
        const user = await userRepository.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

        return {
            statusCode: 200,
            body: { message: 'Password reset token sent', resetToken }
        };
    };
}
