export const validateCurrency = (
    value: number,
    symbol?: string,
  ) => {
    return `${symbol || '$'}${value.toFixed(2)}`
}

export const checkBasket = (
    basket:Array<{
        id: number,
        category: string, 
        product: string, 
        price: number}>) => {
    return 0;
}

export function addProduct(
    products: Array<{
      id: number;
      category: string;
      productName: string;
      price: number;
    }>,
    newProduct: { 
      id: number;
      category: string;
      productName: string;
      price: number;
    }
  ) {
    products.push(newProduct);
    return products;
  }