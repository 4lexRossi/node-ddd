import Address from './address';
import Customer from "./customer";

describe('Address unit tests', () => {
  it('should throw error Street is required', () => {
    expect(() => {
      const customer = new Customer('1', 'Customer 1');
      const address = new Address('', 123, '32142-867', 'Piracity');
      customer.Address = address;
    }).toThrowError('Street is required')
  });

  it('should throw error Zip code is required', () => {
    expect(() => {
      const customer = new Customer('1', 'Customer 1');
      const address = new Address('rua um', 123, '', 'Piracity');
      customer.Address = address;
    }).toThrowError('Zip code is required')
  });

  it('should throw error City is required', () => {
    expect(() => {
      const customer = new Customer('1', 'Customer 1');
      const address = new Address('rua um', 123, '32142-867', '');
      customer.Address = address;
    }).toThrowError('City is required')
  });

  it('should match the returned string', () => {
    const customer = new Customer('1', 'Customer 1');
    const address = new Address('rua um', 123, '32142-867', 'Piracity');
    customer.Address = address;

    const addressToString = address.toString()
    expect(addressToString).toBe('rua um, 123, 32142-867/Piracity')
  });
})