function Person(name){
    this.name = name

    this.walk = function() {
        return "andando"
    }
}

// we use the expression "new"
const gio = new Person('Giovani') //now this one is a constructor function

console.log(gio.walk());