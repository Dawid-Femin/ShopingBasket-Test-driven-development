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

  export function stockRoom() {
    return [
      {
      id: 0,
      category: 'shoes',
      productName: 'Nike Air Max',
      price: 650,
      },
      {
      id: 1,
      category: 't-shirt',
      productName: 'Nike SB',
      price: 150,
      },
    ];
  }
  
  export function toAdd() {
    return {
        id:2,
        category: 'Jumper',
        productName: 'Jordan',
        price: 300,
      }
  }