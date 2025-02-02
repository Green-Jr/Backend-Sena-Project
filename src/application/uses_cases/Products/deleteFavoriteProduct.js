import jwt from 'jsonwebtoken';

export default function buildDeleteProductFromUser({ productRepository }) {
  return async function deleteProductFromUser(productId, token) {
    // Decodificar el JWT para extraer el userId
    const decodedLog = jwt.decode(token);
    console.log('data del usuario del JWT', decodedLog);

    const { userId } = decodedLog; // Extraer el userId del JWT decodificado
    if (!userId) {
      throw new Error('User ID not found in JWT');
    }

    // Eliminar el producto
    await productRepository.findByIdAndDelete(productId);

    return {
      statusCode: 200,
      body: { message: 'Product successfully deleted' }
    };
  };
}
