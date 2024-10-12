const User = require('../../domain/models/user'); // Importa el modelo de User (definido con Sequelize)
const { Op } = require('sequelize'); // Importar operadores de Sequelize

class UserRepository {
    constructor() {
        this.model = User; // Asigna el modelo de Sequelize
    }

    // Guardar un nuevo usuario
    async create(userData) {
        try {
            return await this.model.create(userData); // Usamos `create` para insertar un nuevo registro
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw new Error('Failed to create user');
        }
    }

    // Encontrar múltiples usuarios con base en una consulta
    async find(query) {
        try {
            return await this.model.findAll({ where: query });
        } catch (error) {
            console.error('Error finding users:', error.message);
            throw new Error('Failed to find users');
        }
    }

    // Encontrar un solo usuario con base en una consulta
    async findOne(query) {
        try {
            return await this.model.findOne({ where: query });
        } catch (error) {
            console.error('Error finding user:', error.message);
            throw new Error('Failed to find user');
        }
    }

     // Encontrar usuarios por nombre usando ILIKE para búsquedas insensibles a mayúsculas/minúsculas
     async findByName(name) {
        try {
            console.log('Buscando usuarios con nombre:', name); // Verificar el valor
            return await this.model.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name.trim()}%`, // Búsqueda insensible a mayúsculas
                    },
                },
            });
        } catch (error) {
            console.error('Error finding users by name:', error.message);
            throw new Error('Failed to find users by name');
        }
    }
    

    // Encontrar un usuario por su ID
    async findByPk(id) {
        try {
            return await this.model.findByPk(id);
        } catch (error) {
            console.error('Error finding user by ID:', error.message);
            throw new Error('Failed to find user by ID');
        }
    }

    // Encontrar todos los usuarios
    async findAll() {
        try {
            return await this.model.findAll(); // Usamos `findAll` de Sequelize para obtener todos los usuarios
        } catch (error) {
            console.error('Error finding all users:', error.message);
            throw new Error('Failed to find all users');
        }
    }

    // Actualizar un usuario
    async updateOne(query, updateData) {
        try {
            return await this.model.update(updateData, { where: query });
        } catch (error) {
            console.error('Error updating user:', error.message);
            throw new Error('Failed to update user');
        }
    }

    // Eliminar un usuario por su ID
    async findByIdAndDelete(id) {
        try {
            return await this.model.destroy({ where: { id } });
        } catch (error) {
            console.error('Error deleting user by ID:', error.message);
            throw new Error('Failed to delete user');
        }
    }
}

module.exports = UserRepository;
