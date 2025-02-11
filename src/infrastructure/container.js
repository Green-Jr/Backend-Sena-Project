import { createContainer } from 'awilix';
import registerDependencies from './containerConfig.js';
const container = createContainer();

registerDependencies(container);

export default container;
