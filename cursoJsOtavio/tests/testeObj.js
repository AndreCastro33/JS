const address = { // Object
    street: 'Rua da paz',
    neighborhood: 'Brazil avenue',
    number: 30,
    home: {
        color: 'green',
        type: 'building',
        height: '40 m'
    }
}

const {street = '', number, neighborhood, home, home: {color, height}} = address; // Selecting
console.log(street, number, neighborhood, color);
