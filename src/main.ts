import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer('123', 'Alex')
const address = new Address('rua um', 2, '12332-876', 'Piracicaba')
customer.Address = address;
customer.activate();

const item1 = new OrderItem('1', 'item1', 10);
const item2 = new OrderItem('2', 'item2', 15);

const order = new Order('1', '123', [item1, item2]);