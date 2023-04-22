import Address from './address';
import Customer from "./customer";

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      let customer = new Customer('', 'John');
    }).toThrowError("Id is required");
  });

  it('should throw error when name is empty', () => {
    expect(() => {
      let customer = new Customer('123', '');
    }).toThrowError("Name is required");
  });

  it('should change name', () => {
    //Arrange
    const customer = new Customer('123', 'John')

    //Act
    customer.changeName('Jane');

    //Assert
    expect(customer.name).toBe("Jane");
  });

  it('should activate customer', () => {
    //Arrange
    const customer = new Customer('1', 'Customer 1');
    const address = new Address('street', 123, '32142-867', 'Piracity');
    customer.Address = address;
    expect(customer.isActive()).toBe(false);

    //Act
    customer.activate()

    //Assert
    expect(customer.isActive()).toBe(true);
  });

  it('should deactivate customer', () => {
    //Arrange
    const customer = new Customer('1', 'Customer 1');

    //Act
    customer.deactivate()

    //Assert
    expect(customer.isActive()).toBe(false);
  });

  it('should throw error when customer address is null or undefined when you activate a customer', () => {

    expect(() => {
      const customer = new Customer('1', 'Customer 1');
      customer.activate()
    }).toThrowError('Address is mandatory to activate a customer')
  });

})