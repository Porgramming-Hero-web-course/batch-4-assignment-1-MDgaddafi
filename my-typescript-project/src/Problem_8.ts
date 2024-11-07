{
  //
  function validateKeys<T extends object>(names: T, id: (keyof T)[]): boolean {
    return id.every(key => key in names);
  }
  
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person, ["name", "age"]));
  
  
  //
}
