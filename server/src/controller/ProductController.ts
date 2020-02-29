import Product from '../model/Product';

export default class UserController {
  public save(product) {
    const errors = [];

    if(!product.title) errors.push({message: 'Título é obrigatório'});
    if(!product.price) errors.push({message: 'Preço é obrigatório'});

    if(errors.length) return Promise.reject({errors, status: 400});

    return Product.create(product);
  }

  public fetchAll() {
    return Product.findAll();
  }

  public fetchOneByName(name) {
  }

  public update(name, product) {
  }

}
