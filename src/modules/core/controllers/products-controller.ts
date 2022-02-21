import { Request, Response } from 'express';
import productsService from "../services/products-service";
import productsMapper from "../utils/products-mapper";
import responseMapper from "../utils/response-mapper";

export class ProductsController {
    async getProducts(rq: Request, rs: Response) {
        let response: any;
        try {
            const products = await productsService.getProducts();
            const productsForFront = productsMapper.mapProductsFrontEndWeb(products);
            response = responseMapper.mapResponseSuccessful(productsForFront);
        }catch (error) {
            console.log(error);
            response = responseMapper.mapResponseFailed(error);
        } finally {
            rs.status(response.status).json(response);
        }
    }
}
const productsController = new ProductsController();
export default productsController;
