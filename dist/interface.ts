interface Human {
  id: number;
  name: string;
  age: number;
  email: string;
  username: string;
}

const getPerson = (person1:Human){
    person1.id = Date.now()
    person1.name = "Mudassir"
    person1.username = "mudassir193"
    person1.age = 23
    person1.email = "zamanmudassir193@yahoo.com"
}
