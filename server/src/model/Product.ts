import * as fs from 'fs';

const file = 'database.json';

function readData() {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeData(data) {
  return fs.writeFileSync(file, JSON.stringify(data));
}

export default class Product {
  public title: string;
  public price: string;
  public description: string;

  public static findAll(): Promise<Product[]> {
    return Promise.resolve(readData());
  }

  public static create(product: Product): Promise<Product> {
    const products = readData();
    const newProduct = new Product();
    
    newProduct.title = product.title
    newProduct.price = product.price
    newProduct.description = product.description

    products.push(newProduct);

    writeData(products);

    return Promise.resolve(newProduct);
  }
}

