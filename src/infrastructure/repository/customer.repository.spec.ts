import { Sequelize } from "sequelize-typescript"
import Product from "../../domain/entity/product";
import ProductRepository from "./product.repository";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";

describe('Product repository test', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create a customer', async() => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer('123', 'Customer 1');
    const address = new Address('Stret 1', 1, 'Zipcode 1', 'City 1');
    customer.Address = address;
    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({where: {id: "123"}});

    expect(customerModel.toJSON()).toStrictEqual({
      id: '123',
      name: customer.name,
      active: customer.isActive(),
      rewardPoinst: customer.rewardPoints,
      street: address.street,
      number: address.number,
      zip: address.zip,
      city: address.city,
    });
  });

  // it('should update a product', async() => {
  //   const productRepository = new ProductRepository();
  //   const product = new Product('1', 'Product 1', 100);

  //   await productRepository.create(product);

  //   const productModel = await ProductModel.findOne({where: {id: "1"}});

  //   expect(productModel.toJSON()).toStrictEqual({
  //     id: '1',
  //     name: 'Product 1',
  //     price: 100
  //   });

  //   product.changeName('Product 2');
  //   product.changePrice(200);

  //   await productRepository.update(product);

  //   const productModel2 = await ProductModel.findOne({ where: {id: '1'}});

  //   expect(productModel2.toJSON()).toStrictEqual({
  //     id: '1',
  //     name: 'Product 2',
  //     price: 200
  //   });
  // });

  // it('should find a product', async() => {
  //   const productRepository = new ProductRepository();
  //   const product = new Product('1', 'Product 1', 100);

  //   await productRepository.create(product);

  //   const productModel = await ProductModel.findOne({where: {id: "1"}});

  //   const foundProduct = await productRepository.find('1');

  //   expect(productModel.toJSON()).toStrictEqual({
  //     id: foundProduct.id,
  //     name: foundProduct.name,
  //     price: foundProduct.price
  //   });
  // });

  // it('should find all products', async() => {
  //   const productRepository = new ProductRepository();
  //   const product1 = new Product('1', 'Product 1', 100);
  //   await productRepository.create(product1);

  //   const product2 = new Product('2', 'Product 2', 200);
  //   await productRepository.create(product2);

  //   const foundProducts = await productRepository.findAll();

  //   const products = [product1, product2]

  //   expect(products).toEqual(foundProducts);
  // });
});