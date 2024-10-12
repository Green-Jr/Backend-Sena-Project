import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default function buildResetPasswordUsingToken({ userRepository }) {
    return async function resetPasswordUsingToken({ token, newPassword }) {
        try {
            // Verificar y descodificar el token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('decoded: ' + JSON.stringify(decoded))
            const user = await userRepository.findByPk(decoded.userId); // Obtén el ID del usuario del token
            console.log('user', user);
            if (!user) {
                throw new Error('User not found');
            }

            // Verificar que la nueva contraseña no sea la misma que la anterior
            const isSamePassword = await bcrypt.compare(newPassword, user.password);
            if (isSamePassword) {
                throw new Error('New password cannot be the same as the old password');
            }

            // Hashear la nueva contraseña y actualizarla en la base de datos
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await userRepository.updateOne({ id: user.id }, { password: hashedPassword });

            return {
                statusCode: 200,
                body: { message: 'Password reset successfully' },
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: { error: 'Invalid or expired token' },
            };
        }
    };
}
