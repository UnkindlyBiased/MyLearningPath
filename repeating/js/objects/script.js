function makeUser() {
    return {
        name: "John",
        ref: this
    }
}

let user = makeUser()
console.log(user.ref.name)

let calculator = {
    a: 0,
    b: 0,
    read() {
        a = Number(prompt("Введіть значення для числа А", 0))
        b = Number(prompt("Введіть значення для числа B", 0))
    },
    sum() {
        return a + b
    },
    multiply() {
        return a * b
    }
}

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.multiply())

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // показує поточний крок
        alert( this.step );
        return this
    }
}

ladder.up().up().showStep()