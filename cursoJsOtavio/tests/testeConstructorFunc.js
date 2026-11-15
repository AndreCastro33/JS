function Person(x, y) {
    this.name = x;
    this.lastName = y;

    this.method = function() {
        console.log(this.name + ": I'm a method.")
    }
}

const p1 = new Person('andre', 'castro');
const p2 = new Person('pedro', 'silva')

p1.method();
console.log(p2.lastName);