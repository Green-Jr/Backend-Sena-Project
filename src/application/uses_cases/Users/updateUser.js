export default function buildUpdateUser({ userRepository }) {
    return async function updateUser(userId, updateData) {
        const user = await userRepository.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Actualizar el usuario
        await userRepository.updateOne({ id: userId }, updateData);
        const updatedUser = await userRepository.findByPk(userId);

        return {
            statusCode: 200,
            body: updatedUser
        };
    };
}
