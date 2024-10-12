import buildCreateUserController from './UserControllers/createUserController';
import buildGetAllUsersController from './UserControllers/getAllUsersController';
import buildGetUserByIdController from './UserControllers/getUserByIdController';
import buildUpdateUserController from './UserControllers/updateUserController';
import buildDeleteUserController from './UserControllers/deleteUserController';
import buildAuthenticateUserController from './UserControllers/authenticateUserController';
import buildGeneratePasswordResetTokenController from './UserControllers/generatePasswordResetTokenController';
import buildResetPasswordUsingTokenController from './UserControllers/resetPasswordUsingTokenController';
import buildSearchUsersController from './UserControllers/searchUsersController';
import buildGetFavoriteProductsController from './ProductsControllers/searchFavoritesProductsController';
import buildAddProductToFavoritesController from './ProductsControllers/addProductToFavoritesController';

import useCases from '../../application/uses_cases';

// Creación de los controladores con sus respectivos casos de uso
const createUserController = buildCreateUserController({ createUser: useCases.createUser });
const getAllUsersController = buildGetAllUsersController({ getAllUsers: useCases.getAllUsers });
const getUserByIdController = buildGetUserByIdController({ getUserById: useCases.getUserById });
const updateUserController = buildUpdateUserController({ updateUser: useCases.updateUser });
const deleteUserController = buildDeleteUserController({ deleteUser: useCases.deleteUser });
const authenticateUserController = buildAuthenticateUserController({ authenticateUser: useCases.authenticateUser });
const generatePasswordResetTokenController = buildGeneratePasswordResetTokenController({ generatePasswordResetToken: useCases.generatePasswordResetToken });
const resetPasswordUsingTokenController = buildResetPasswordUsingTokenController({ resetPasswordUsingToken: useCases.resetPasswordUsingToken });
const searchUsersController = buildSearchUsersController({ searchUsers: useCases.searchUsers });
const searchFavoritesProductsController = buildGetFavoriteProductsController({ getFavoriteProducts: useCases.getFavoriteProducts });
const addProductToFavoritesController = buildAddProductToFavoritesController({ addProductToFavorites: useCases.addProductToFavorites });

const controllers = Object.freeze({
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
    authenticateUserController,
    generatePasswordResetTokenController,
    resetPasswordUsingTokenController,
    searchUsersController,
    searchFavoritesProductsController,
    addProductToFavoritesController
});

export default controllers;
export {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
    authenticateUserController,
    generatePasswordResetTokenController,
    resetPasswordUsingTokenController,
    searchUsersController,
    searchFavoritesProductsController,
    addProductToFavoritesController
};
