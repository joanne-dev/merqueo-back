import axios from 'axios';
import {configEnv} from "../../../config";

class ProductsService {
    async getProducts() {
        return axios.get(configEnv.URL);
    }
}
const productsService = new ProductsService();
export default productsService;
