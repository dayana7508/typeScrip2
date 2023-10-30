// Define la clase base 'User'
class User {
    constructor(name) {
      this.name = name;
    }
  
    getInfo() {
      return `Name: ${this.name}`;
    }
  }
  
 
  class Admin extends User {
    constructor(name, isAdmin) {
      super(name);
      this.isAdmin = isAdmin;
    }
  
    getInfo() {
      return `${super.getInfo()}, Admin: ${this.isAdmin}`;
    }
  }
  
  
  function printUserData(user) {
    console.log(user.getInfo());
  }

  const regularUser = new User('Alice');
  const adminUser = new Admin('Bob', true);
  
  
  printUserData(regularUser);
  printUserData(adminUser);
  