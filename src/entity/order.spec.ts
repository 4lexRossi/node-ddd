import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      let order = new Order('', '123', []);
    }).toThrowError("Id is required");
  });

  it('should throw error when customerId is empty', () => {
    expect(() => {
      let order = new Order('123', '', []);
    }).toThrowError("Customer id is required");
  });

  it('should throw error when items is empty', () => {
    expect(() => {
      let order = new Order('123', '123', []);
    }).toThrowError("Items are required");
  });

  it('should calculate total', () => {
    //Arrange
    const item1 = new OrderItem('i1', 'p1', 'Item 1', 100, 2);
    const item2 = new OrderItem('i2', 'p2', 'Item 2', 200, 2);
    const order = new Order('o1', 'c1',[item1]);
    expect(item1.price).toBe(100);
    //Act
    let total = order.total();

    //Assert
    expect(total).toBe(200);

    //Arrange
    const order2 = new Order('o1', 'c1', [item1, item2]);

    //Act
    total = order2.total();

    //Assert
    expect(total).toBe(600);
  });

  it('should check and throw error if item qtd is less or equal 0', () => {
    expect(() => {
      const item1 = new OrderItem('i1', 'p1', 'Item 1', 100, 0);
      const order = new Order('o1', 'c1',[item1]);
    }).toThrowError('Quantity must be greater than zero');
  });

})