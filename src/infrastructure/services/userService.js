import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    // Crear usuario
    async createUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return this.userRepository.create({
            ...userData,
            password: hashedPassword,
        });
    }

    // Obtener todos los usuarios
    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    // Obtener usuario por ID
    async getUserById(userId) {
        return await this.userRepository.findByPk(userId);
    }

    // Actualizar usuario
    async updateUser(userId, userData) {
        await this.userRepository.updateOne({ id: userId }, userData);
        return this.userRepository.findByPk(userId);
    }

    // Eliminar usuario
    async deleteUser(userId) {
        return this.userRepository.findByIdAndDelete(userId);
    }

    // Autenticación de usuario
    async authenticateUser(email, password) {
        const user = await this.userRepository.findOne({ email: String(email) });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    }

    // Resetear contraseña (simplificado para ejemplo)
    async resetPassword(email) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Lógica de token de reseteo
        return { message: 'Password reset email sent' };
    }

    // Actualizar perfil
    async updateProfile(userId, profileData) {
        const allowedUpdates = ['name', 'email', 'profilePicture'];
        const updates = {};
        for (const key of allowedUpdates) {
            if (profileData[key] !== undefined) {
                updates[key] = profileData[key];
            }
        }

        await this.userRepository.updateOne({ id: userId }, updates);
        return this.userRepository.findByPk(userId);
    }

    // Generar token para el reseteo de contraseña
    async generatePasswordResetToken(email) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Generamos un token JWT para resetear la contraseña
        const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' }); // Token válido por 15 minutos

        // Aquí podrías agregar lógica para enviar el token por correo electrónico

        return { message: 'Password reset token sent', resetToken };
    }

    // Cambiar la contraseña usando el token de reseteo
    async resetPasswordUsingToken(token, newPassword) {
        try {
            // Verificamos el token JWT
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const user = await this.userRepository.findByPk(decodedToken.userId);

            if (!user) {
                throw new Error('User not found');
            }

            // Evitar que la nueva contraseña sea igual a la anterior
            const isSamePassword = await bcrypt.compare(newPassword, user.password);
            if (isSamePassword) {
                throw new Error('New password cannot be the same as the old password');
            }

            // Guardar la nueva contraseña en la base de datos
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            await this.userRepository.updateOne({ id: user.id }, { password: hashedNewPassword });

            return { message: 'Password reset successfully' };

        } catch (error) {
            throw new Error('Invalid or expired token');
        }
    }


    // Buscar usuarios por consulta
    async searchUsers(query) {
        return this.userRepository.find(query);
    }
}

export default UserService;
