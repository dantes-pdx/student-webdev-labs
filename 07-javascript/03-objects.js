let result = {};

const insertItem = (key, value) => {
  result[key] = value;
};

const deleteItem = (key) => {
  delete result[key];
};

const lookupItem = (key) => {
  return result[key] || "Item does not exist";
};

const printItems = () => {
  // Return a string of concatenated keys in result, separated by commas
  return Object.keys(result).join(",");
};

// Test cases
insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");

console.log(printItems());
// Expected: 'hello,lorem,sit' (order may vary)

console.log(lookupItem("lorem"));
// Expected: 'ipsum'

deleteItem("lorem");

console.log(printItems());
// Expected: 'hello,sit' (order may vary)

console.log(lookupItem("lorem"));
// Expected: 'Item does not exist'
