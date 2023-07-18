// while(n>0){
// k++;

// }
// console.log(k);
//1)masala
//     let n = 15
// for(let k=6;k<=n;k++){
//     console.log(n);
// // }
//     let n = 15
// for(let k=6;k<=n;k++){
//     console.log(n);
// }
// 2)masala
// let b = 100
// let son = 0
// let son1 = 0
// for (let a=10; a <= b; a++) {
//     if (Number.parseInt(a)) {
//         console.log(a);
//     } else {
//         son1 += a
//     }
//     // console.log();
// }
// 3)Misol
// let a= 1
// let b= 100
// for(b;b>=a;b--){
//     console.log(b);
// }
// 4)Misol
// for (let i = 1; i <= 1000; i++) {
//     console.log(`${i}kg ${i*2} Ming`);
// }
// 5)Misol
// for (let i = 0.1; i < 0.2; i++) {
//     console.log(i);
// }
// 6)Misol
// for (let i = 0.1; i < 0.2; i++) {
//     console.log(i);
// }
// 7) Misol
// for (let i = 1; i <= 100; i++) {
//     let count = 0
//     let son = 0
//     for (j = 1; j < i; j++) {
//         if (i % j == 0) {
//             count++;
//         }
//     }
//     if (count <= 2 && i !== 1) {
//         console.log(i + i);
//     }
// }

let students = [
    { id: 1, name: "Dilmurod" },
    { id: 2, name: "Muhammadjon" },
    { id: 3, name: "Abdulahad" },
    { id: 4, name: "Umarbek" },
    { id: 5, name: "Hoshim" },
]
const userDelete = (id) => {
    students = students.filter((v) => v.id !== id)

}

userDelete(2)
console.log(students);