import jwt from 'jsonwebtoken';

export default function buildGetFavoriteProducts({ sequelize }) {
    return async function getFavoriteProducts(token) {
        
        console.log('getFavoriteProducts')
        // Decodificar el JWT para extraer el userId
        const decodedToken = jwt.decode(token);
        const { userId } = decodedToken;
        console.log('userId extraído del token:', userId); // Verificar el userId


        if (!userId) {
            throw new Error('User ID not found in token');
        }

        // Consultar los productos de la vista utilizando el userId del token
        const products = await sequelize.query(
            `SELECT * FROM "EASY_MARKET"."USER_PRODUCTS_VIEW" WHERE "USER_ID" = :userId`,
            {
                replacements: { userId }, // Pasamos el userId extraído del token
                type: sequelize.QueryTypes.SELECT // Indicamos que es una consulta SELECT
            }
        );

        if (!products || products.length === 0) {
            throw new Error('No products found for this user');
        }

        return {
            statusCode: 200,
            body: products // Devolvemos los productos obtenidos desde la vista
        };
    };
}
