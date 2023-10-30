// Define un objeto que cumple con la "interfaz" Product
const product1 = {
    name: 'Product 1',
    price: 10.99,
    // Otras propiedades específicas del producto
  };
  
  const product2 = {
    name: 'Product 2',
    price: 24.99,
    // Otras propiedades específicas del producto
  };
  
  
  const inventory = {
    products: [],
    addProduct: function(product) {
      this.products.push(product);
    },
    findProduct: function(productName) {
      return this.products.find(product => product.name === productName);
    },
  };
  
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  
  const productToFind = 'Product 1';
  const foundProduct = inventory.findProduct(productToFind);
  
  if (foundProduct) {
    console.log(`Product found: ${foundProduct.name}, Price: $${foundProduct.price}`);
  } else {
    console.log(`Product '${productToFind}' not found in inventory.`);
  }
  