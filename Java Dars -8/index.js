let obj = {
        name: "webbrain",
        surname: "brainn",
        age: 20,
        info: {
            soni: 18,
            yonalishi: "IT",
        }
    }
    // let { name, surname, age, info: { soni, yonalishi } } = obj
    // console.log(name);
    //Homework
function makeser() {
    return {
        name: "John",
        ref: this
    }
}
let user = makeser();
// console.log(user.ref.name); undefined..
let calculyet = {
        a: 2,
        b: 5,
        red() {
            console.log(this.a, this.b);
        },
        sum() {
            console.log(this.a + this.b);
        },
        mul() {
            console.log(this.a * this.b);
        }
    }
    // calculyet.red()
    // calculyet.sum()
    // calculyet.mul()
let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showspet() {
            console.log(this.step);
        }
    }
    // ladder.up().up().down().showspet().down().showspet()
    // console.error("xato");