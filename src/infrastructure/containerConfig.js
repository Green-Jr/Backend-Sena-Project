import { asClass, asValue } from 'awilix';
import UserRepository from './repositories/userRepository';
import ProductRepository from './repositories/productRepository';
import ExternalAPIService from './services/externalAPI'; // Importa tu servicio externo

const registerDependencies = (container) => {
    container.register({
        userRepository: asClass(UserRepository).singleton(),
        productRepository: asClass(ProductRepository).singleton(),
        baseURL: asValue('https://api.mercadolibre.com/sites/MLA'), // URL de la API de MercadoLibre
    });

    // Registrar ExternalAPIService con la URL base
    container.register({
        externalAPIService: asClass(ExternalAPIService).singleton(), // Registra el servicio externo
    });
};

export default registerDependencies;
