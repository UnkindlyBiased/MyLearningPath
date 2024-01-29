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

// ladder.up().up().showStep()

function Something(name) {
    this.name = name,
    this.isAdmin = false
}

let someone = new Something("The Who")
// alert(someone.name)

function ReturnTest(newName) {
    this.newName = newName
    return;
}

let test = new ReturnTest("brutmonster")
console.log(test)

function CalcFunc() {
    this.numbers = {
        a: 0,
        b: 0
    }
    this.read = () => {
        this.numbers.a = Number(prompt("Введіть число A"))
        this.numbers.b = Number(prompt("Введіть число B"))
    }
    this.sum = () => {
        return this.numbers.a + this.numbers.b
    }
    this.multiply = () => {
        return this.numbers.a * this.numbers.b
    }
}

let newCalc = new CalcFunc
// newCalc.read()
// alert(newCalc.sum())

function Accumulator(startValue) {
    this.startValue = startValue
    this.read = () => {
        this.startValue += Number(prompt("Введіть значення"))
        alert(this.startValue)
    }
}

let accum = new Accumulator(12)
document.getElementById('addValue').addEventListener('click', () => {
    accum.read()
})