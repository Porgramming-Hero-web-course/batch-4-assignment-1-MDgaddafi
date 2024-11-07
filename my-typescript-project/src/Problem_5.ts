{
  //
  function getProperty<T, K extends keyof T>(id: T, names: K): T[K] {
    return id[names];
  }

  const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name")); // Output

  //
}
