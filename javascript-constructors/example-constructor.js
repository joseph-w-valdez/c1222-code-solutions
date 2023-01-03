function ExampleConstructor() {}
console.log('ExampleConstructor value :  ', ExampleConstructor());
console.log('typeof ExampleConstructor value :  ', typeof ExampleConstructor);
var builtObject = new ExampleConstructor();
console.log('builtObject value :  ', builtObject);
var whoBuiltIt = builtObject instanceof ExampleConstructor;
console.log('whoBuiltIt value :  ', whoBuiltIt);
