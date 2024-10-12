import { createContainer } from 'awilix';
import registerDependencies from './containerConfig';
const container = createContainer();

registerDependencies(container);

export default container;
