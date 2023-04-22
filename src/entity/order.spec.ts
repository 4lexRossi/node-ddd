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
    const item1 = new OrderItem('i1', 'Item 1', 100);
    const item2 = new OrderItem('i2', 'Item 2', 200);
    const order = new Order('o1', 'c1',[item1]);

    //Act
    let total = order.total();

    //Assert
    expect(total).toBe(100);

    //Arrange
    const order2 = new Order('o1', 'c1', [item1, item2]);

    //Act
    total = order2.total();

    //Assert
    expect(total).toBe(300);
  });

})