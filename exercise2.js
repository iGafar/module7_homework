let string = 'name';
let andrei = {
  name: "Andrey",
  age: 18
}

function examPropety(str, obj) {
  return console.log((str in obj));
}

examPropety(string, andrei);