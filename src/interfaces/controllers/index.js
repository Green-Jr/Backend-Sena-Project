import buildCreateUserController from './UserControllers/createUserController.js';
import buildGetAllUsersController from './UserControllers/getAllUsersController.js';
import buildGetUserByIdController from './UserControllers/getUserByIdController.js';
import buildUpdateUserController from './UserControllers/updateUserController.js';
import buildDeleteUserController from './UserControllers/deleteUserController.js';
import buildAuthenticateUserController from './UserControllers/authenticateUserController.js';
import buildGeneratePasswordResetTokenController from './UserControllers/generatePasswordResetTokenController.js';
import buildResetPasswordUsingTokenController from './UserControllers/resetPasswordUsingTokenController.js';
import buildSearchUsersController from './UserControllers/searchUsersController.js';
import buildGetFavoriteProductsController from './ProductsControllers/searchFavoritesProductsController.js';
import buildAddProductToFavoritesController from './ProductsControllers/addProductToFavoritesController.js';
import buildRemoveProductFromFavoritesController from './ProductsControllers/deleteFavoriteProductController.js';

import useCases from '../../application/uses_cases/index.js';

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
const removeProductFromFavoritesController = buildRemoveProductFromFavoritesController({removeProductFromFavorites: useCases.removeProductFromFavorites})

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
    addProductToFavoritesController,
    removeProductFromFavoritesController
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
    addProductToFavoritesController,
    removeProductFromFavoritesController
};
