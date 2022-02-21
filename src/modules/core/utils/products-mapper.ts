export type Product = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    quantity: number
}

export class ProductsMapper {
    mapProductsFrontEndWeb(productsApi: any): Product[]{
        console.log('products: ', productsApi.data);
        const products: any[] = [];
        productsApi.data.data.forEach((product: any) => {
            products.push({
                id: product.id,
                name: product.attributes.name,
                price: product.attributes.price,
                imageUrl: product.attributes.image_large_url,
                quantity: Number(product.attributes.quantity)
            })
        })
        return products;
    }
}
const productsMapper = new ProductsMapper();
export default productsMapper;
