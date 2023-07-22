// function
// function   !!declerition
function getname() {
    console.log("Hello");
}
// getname()

// function exspretion
const name = function() {
        console.log("hello");
    }
    // name()
    // arrow functioncon
const getsurname = () => {
        console.log("hello");
    }
    // getsurname()
    // let age = 10

function checkage() {
    if (age > 18) {
        return true;
    } else {
        return console.log('Hello Muhammadjon')
    }
}
// checkage()

function getname() {
    age > 18 ? console.log(true) : console.log('hello Muhammadjon ');
}
// let son = 12
// getname()
function getson(a, b) {
    if (a > b) {
        console.log(`${b} Kichkina`);
    } else if (a < b) {
        console.log(`${a} Kichkina`);
    } else {
        console.log(`Ikkalasi teng`);
    }
}
// getson(1, 90)
function getdaraja(a, b) {
    console.log(a * b);
    console.log(a ** b);
}
// getdaraja(2, 5)
function aks(question, yes, no) {
    if (console.log(question)) yes()
    else no()
}
aks(
    "Do you agree?",
    function() { console.log("You agred."); },
    function() { console.log("You canceld the execution."); }
);