var square = (x) => (x * x);

console.log(square(9));

var user = {
  name: 'AAA',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt (){
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};
user.sayHi();
console.log('-------')
user.sayHiAlt(1,2,3);
