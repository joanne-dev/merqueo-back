"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsMapper = void 0;
class ProductsMapper {
    mapProductsFrontEndWeb(productsApi) {
        console.log('products: ', productsApi.data);
        const products = [];
        productsApi.data.data.forEach((product) => {
            products.push({
                id: product.id,
                name: product.attributes.name,
                price: product.attributes.price,
                imageUrl: product.attributes.image_large_url,
                quantity: Number(product.attributes.quantity)
            });
        });
        return products;
    }
}
exports.ProductsMapper = ProductsMapper;
const productsMapper = new ProductsMapper();
exports.default = productsMapper;
//# sourceMappingURL=products-mapper.js.map