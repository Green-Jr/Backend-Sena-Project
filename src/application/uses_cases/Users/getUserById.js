export default function buildGetUserById({ userRepository }) {
    return async function getUserById(userId) {
        const user = await userRepository.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return {
            statusCode: 200,
            body: user
        };
    };
}
