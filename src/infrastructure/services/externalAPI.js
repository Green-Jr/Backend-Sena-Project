import axios from 'axios';

class ExternalAPIService {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL
        });
    }

    async get(endpoint) {
        try {
            return await this.api.get(endpoint);
        } catch (error) {
            console.error('Error fetching data from external API:', error.message);
            throw new Error('Failed to fetch data from external API');
        }
    }
}

export default ExternalAPIService;
