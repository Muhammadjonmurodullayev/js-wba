// Object
// let obj1 = {
//         atomo: 2,
//         btomon: 2,
//         gettomon() {
//             return this.atomo * 2 + this.btomon * 2
//         }
// }
// console.log(obj.gettomon());
// let obj = {
//     p: 3.14,
//     r: 12,
// }
// const getaylana = (obj1) => {
//         return 2 * obj1.p * obj1.r

//     }
// console.log(getaylana(obj));
// let obj = {
//     p: 3.14,
//     r: 12,
//     getaylana() {
//         return 2 * this.p * this.r
//     }
// }
// console.log(obj.getaylana());
// let user = {
//     name: "John",
//     surname: "Simith",
// }
// user.name = "Pete"
// delete user.name
// console.log(user);
// let salaries = {
//         john: 100,
//         Ann: 160,
//         Pete: 130
//     }
// let salaries1 = Object.values(salaries)
//     // console.log(salaries1);
// let str = salaries1.toString()
//     // console.log(str);
// let sum = ""
// for (i of str) {
//     if (str[i]) {
//         console.log(str[i]);
//     }
// }
// let sum1 = {
//     john: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0
// for (i in sum1) {
//     if (typeof sum1[i] === "number") {
//         sum += sum1[i]
//     }
//     console.log(sum);
// }
let sum = {
    john: 100,
    Ann: 160,
    Pete: 130,
    name: "Muhammadjon"
}
for (i in sum) {
    if (typeof sum[i] === "number") {
        sum = sum[i] + sum[i]
    }
}
console.log(sum);