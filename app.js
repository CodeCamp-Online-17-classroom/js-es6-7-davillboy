// write code here
function doubleAndReturnArgs(arr, ...args) {
  return [...arr, ...args.map(num => num * 2)];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
console.log(doubleAndReturnArgs([2], 10, 4));      
