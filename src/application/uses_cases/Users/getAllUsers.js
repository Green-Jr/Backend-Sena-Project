export default function buildGetAllUsers({ userRepository }) {
    return async function getAllUsers() {
        const users = await userRepository.findAll();
        return {
            statusCode: 200,
            body: users
        };
    };
}
