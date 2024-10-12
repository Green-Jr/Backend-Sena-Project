import buildCreateUser from './Users/createUser';
import buildGetAllUsers from './Users/getAllUsers';
import buildGetUserById from './Users/getUserById';
import buildUpdateUser from './Users/updateUser';
import buildDeleteUser from './Users/deleteUser';
import buildAuthenticateUser from './Users/authenticateUser';
import buildGeneratePasswordResetToken from './Users/generatePasswordResetToken';
import buildResetPasswordUsingToken from './Users/resetPasswordUsingToken';
import buildSearchUsers from './Users/searchUsers';
import buildGetFavoriteProducts from './Products/getFavoriteProducts';
import buildAddProductToFavorites from './Products/addProductToFavorites';
import UserRepository from '../../infrastructure/repositories/userRepository';
import ProductRepository from '../../infrastructure/repositories/productRepository'; 
import sequelize from '../../infrastructure/Config/database';

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
    addProductToFavorites
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
    addProductToFavorites
};
