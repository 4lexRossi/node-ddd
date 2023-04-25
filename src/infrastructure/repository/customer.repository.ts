import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repository/customer-repository.interface";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zip: entity.address.zip,
      city: entity.address.city,
    });
  };

  async update(entity: Customer): Promise<void> {
    // await ProductModel.update(
    //   {
    //     name: entity.name,
    //     price: entity.price,
    //   },
    //   {
    //     where: {
    //       id: entity.id
    //     }
    //   }
    // );
    throw new Error('error')
  }

  async find(id: string): Promise<Customer> {
    // const productModel = await ProductModel.findOne({where: {id}});
    // return new Product(productModel.id, productModel.name, productModel.price)
    throw new Error('error')
  }

  async findAll(): Promise<Customer[]> {
    //   const productModels = await ProductModel.findAll();
    //   return productModels.map((productModel) =>
    //     new Product(productModel.id, productModel.name, productModel.price)
    //   );
    throw new Error('error')
  }
}