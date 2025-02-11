import Product from '../../domain/models/product.js';

class ProductRepository {
    constructor() {
        this.model = Product; // Asigna el modelo de Sequelize
    }

    // Guardar un nuevo producto
    async create(productData) {
        try {
            return await this.model.create(productData); // Usamos `create` para insertar un nuevo registro de producto
        } catch (error) {
            console.error('Error creating product:', error.message);
            throw new Error('Failed to create product');
        }
    }

    // Encontrar múltiples productos con base en una consulta
    async find(query) {
        try {
            return await this.model.findAll({ where: query });
        } catch (error) {
            console.error('Error finding products:', error.message);
            throw new Error('Failed to find products');
        }
    }

    // Encontrar un solo producto con base en una consulta
    async findOne(query) {
        try {
            return await this.model.findOne({ where: query });
        } catch (error) {
            console.error('Error finding product:', error.message);
            throw new Error('Failed to find product');
        }
    }

    // Encontrar un producto por su ID
    async findByPk(id) {
        try {
            return await this.model.findByPk(id);
        } catch (error) {
            console.error('Error finding product by ID:', error.message);
            throw new Error('Failed to find product by ID');
        }
    }

    // Encontrar todos los productos
    async findAll() {
        try {
            return await this.model.findAll(); // Usamos `findAll` de Sequelize para obtener todos los productos
        } catch (error) {
            console.error('Error finding all products:', error.message);
            throw new Error('Failed to find all products');
        }
    }

    // Actualizar un producto
    async updateOne(query, updateData) {
        try {
            return await this.model.update(updateData, { where: query });
        } catch (error) {
            console.error('Error updating product:', error.message);
            throw new Error('Failed to update product');
        }
    }

    // Eliminar un producto por su ID
    async findByIdAndDelete(id) {
        try {
            return await this.model.destroy({ where: { id } });
        } catch (error) {
            console.error('Error deleting product by ID:', error.message);
            throw new Error('Failed to delete product');
        }
    }
}

export default ProductRepository;