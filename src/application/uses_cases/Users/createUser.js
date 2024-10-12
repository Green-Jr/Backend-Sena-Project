import bcrypt from 'bcrypt';

export default function buildCreateUser({ userRepository }) {
    return async function createUser({ name, email, password, role }) {
        console.log('Entrada a el caso de uso ');

        // Verificar si el usuario ya existe
        const existingUser = await userRepository.findOne({ email }); // Cambiamos a userRepository
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const newUser = await userRepository.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        return {
            statusCode: 201,
            body: newUser,
        };
    };
}
