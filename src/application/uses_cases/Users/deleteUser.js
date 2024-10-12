export default function buildDeleteUser({ userRepository }) {
    return async function deleteUser(userId) {
        const user = await userRepository.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }

        await userRepository.findByIdAndDelete(userId);

        return {
            statusCode: 200,
            body: { message: 'User deleted successfully' }
        };
    };
}
