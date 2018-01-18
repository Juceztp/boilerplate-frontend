var Person = function (name) {
  this.name = name
  this.channel = function (channel) {
    return 'Hola soy ' + name
  }
}

const David = new Person('David')
console.log(David.channel('Prueba'))
