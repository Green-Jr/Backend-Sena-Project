import buildCreateUser from './Users/createUser.js';
import buildGetAllUsers from './Users/getAllUsers.js';
import buildGetUserById from './Users/getUserById.js';
import buildUpdateUser from './Users/updateUser.js';
import buildDeleteUser from './Users/deleteUser.js';
import buildAuthenticateUser from './Users/authenticateUser.js';
import buildGeneratePasswordResetToken from './Users/generatePasswordResetToken.js';
import buildResetPasswordUsingToken from './Users/resetPasswordUsingToken.js';
import buildSearchUsers from './Users/searchUsers.js';
import buildGetFavoriteProducts from './Products/getFavoriteProducts.js';
import buildAddProductToFavorites from './Products/addProductToFavorites.js';
import buildDeleteProductFromUser from './Products/deleteFavoriteProduct.js';
import UserRepository from '../../infrastructure/repositories/userRepository.js';
import ProductRepository from '../../infrastructure/repositories/productRepository.js'; 
import sequelize from '../../infrastructure/Config/database.js';

const userRepositoryInstance = new UserRepository(); 
const productRepositoryInstance = new ProductRepository(); 

const createUser = buildCreateUser({ userRepository: userRepositoryInstance });
const getAllUsers = buildGetAllUsers({ userRepository: userRepositoryInstance });
const getUserById = buildGetUserById({ userRepository: userRepositoryInstance });
const updateUser = buildUpdateUser({ userRepository: userRepositoryInstance });
const deleteUser = buildDeleteUser({ userRepository: userRepositoryInstance });
const authenticateUser = buildAuthenticateUser({ userRepository: userRepositoryInstance });
const generatePasswordResetToken = buildGeneratePasswordResetToken({ userRepository: userRepositoryInstance });
const resetPasswordUsingToken = buildResetPasswordUsingToken({ userRepository: userRepositoryInstance });
const searchUsers = buildSearchUsers({ userRepository: userRepositoryInstance });
const getFavoriteProducts = buildGetFavoriteProducts({ userRepository: userRepositoryInstance, sequelize });
const addProductToFavorites = buildAddProductToFavorites({ userRepository: userRepositoryInstance,productRepository: productRepositoryInstance});
const removeProductFromFavorites = buildDeleteProductFromUser ({ userRepository: userRepositoryInstance, productRepository: productRepositoryInstance})

const useCases = Object.freeze({
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    authenticateUser,
    generatePasswordResetToken,
    resetPasswordUsingToken,
    searchUsers,
    getFavoriteProducts,
    addProductToFavorites,
    removeProductFromFavorites
});

export default useCases;
export {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    authenticateUser,
    generatePasswordResetToken,
    resetPasswordUsingToken,
    searchUsers,
    getFavoriteProducts,
    addProductToFavorites,
    removeProductFromFavorites
};
