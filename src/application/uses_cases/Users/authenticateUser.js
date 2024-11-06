import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default function buildAuthenticateUser({ userRepository }) {
    return async function authenticateUser({ email, password }) {
        const user = await userRepository.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign(
            { 
                userId: user.id, 
                email: user.email, 
                name: user.name 
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );
        
        return {
            statusCode: 200,
            body: { user, token }
        };
    };
}
