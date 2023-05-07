const person = {
  name: "Andrey",
  surname: "Ivanov",
  age: 19
}

function func(a) {
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

func(person);