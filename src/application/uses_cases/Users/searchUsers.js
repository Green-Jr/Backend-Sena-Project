export default function buildSearchUsers({ userRepository }) {
    return async function searchUsers({ name }) {
        try {
            const users = await userRepository.findByName(name); // Buscar por nombre
            if (!users || users.length === 0) {
                throw new Error('No users found');
            }

            return {
                statusCode: 200,
                body: users,
            };
        } catch (error) {
            console.error('Error searching users by name:', error.message);
            throw new Error('Failed to search users by name');
        }
    };
}
