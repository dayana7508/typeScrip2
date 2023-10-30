
const baseObject = {
    id: 1, 
  };
  
  const user = Object.assign({}, baseObject, {
    username: 'john_doe',
    email: 'john@example.com',
  });
  
  const product = Object.assign({}, baseObject, {
    name: 'Product A',
    price: 19.99,
  });
  
  const order = Object.assign({}, baseObject, {
    userId: 1,
    productId: 2,
    quantity: 3,
  });
  
  
  function printData(obj) {
    console.log(obj);
  }
  
  
  printData(user);
  printData(product);
  printData(order);
  