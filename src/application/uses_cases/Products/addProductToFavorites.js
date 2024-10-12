import jwt from 'jsonwebtoken';

export default function buildAddProductToUser({ productRepository }) {
  return async function addProductToUser(productData, token) {
    // Decodificar el JWT para extraer el userId
    const decodedLog = jwt.decode(token);
    console.log('data del usuario del JWT', decodedLog);

    const { userId } = decodedLog; // Extraer el userId del JWT decodificado
    if (!userId) {
      throw new Error('User ID not found in JWT');
    }

    // Agregar el ID del usuario al producto
    const productDataWithUser = {
      ...productData,
      iduser: userId // Añadimos el ID del usuario
    };

    // Crear siempre el producto, independientemente de si ya existe con otro usuario
    const newProduct = await productRepository.create(productDataWithUser);

    return {
      statusCode: 200,
      body: { message: 'Product added to user', product: newProduct }
    };
  };
}
