// function getname() {
// console.log(1);
// return getname()
// }
// getname()
// let n = 10
// let res = 0
// for (let i = 1; i <= n; i++) {
//     res += i
// }
// console.log(res);
// let n = 10000
// const getname = (n) => {
//     if (n === 1) return 1
//     return n + getname(n - 1)
// }
let n = 10
const getname = (n) => {
    if (n === 1) return 1
    return n + getname(n - 1)
}
console.log(getname(n));
// !!!!!!!!!!!!!!!!!!!!
let m = 10
const getnamee = (m) => {
    if (m === 1) return 1
    return m * getname(m - 1)
}
console.log(getnamee(m));