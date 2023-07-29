// console.log(Number);
let num1 = `123.45`;
// console.log(+num);
// console.log(Number(num1));
// console.log(Number.parseInt(num1));
// console.log(Number.parseFloat(num1));
// ?
let num = 1000000;
// let num2 = 1 _000_000;
// console.log(typeof num);
// console.log(typeof num);
// console.log(num);
// console.log(num);
// ?
let num4 = 1000000;
num4 = 1e6;
// num4 = 1e-6; //0.000001
// console.log(num4);
//! toFixed
let son = 12.3456
    // console.log(son.toFixed(2)); //Bu nuqtadan keyin nechta son qoldirishi
    //! toPrecision()
let son1 = 12.343343
    // console.log(son1.toPrecision(3)); // Bu endi hamma soonni ischidan nechta son qolish
    //! 2=>10 ,10=>2 === sanoq sistemasiga o'tish
    // 2 => 10 kao'tish
let son2 = 1001;
let rezaut = parseInt(son2, 2); // 2 => 10 ikkilikdan o'nlik sanoq sistemasiga o'tish 
// console.log(rezaut);
let son3 = 9;
let son4 = son3.toString(2); // 10 => 2 o'nlikdan ikkilika o'tish
// console.log(+son4);
//? isNaN
// console.log(isNaN(NaN)); //true
// console.log(isNaN(12)); //false
// console.log(isNaN("Muhammadjon")); //true
//  ==, === Object.is()
// console.log(Object.is(23, "12")); //false
// console.log(Object.is(23, 23)); //true
// ====================================================
//!   Math PI
// console.log(Math.PI); 3.141592653589793 yani P qiymat 3.14 ga teng
// =====================================================
//!   Math abs Modul 
// console.log(Math.abs(-2));// 2
// console.log(Math.abs(0)); // 
// ======================================================
// pow(son,daraja) darsjani chiqarib berdi 
// console.log(Math.pow(0, 4)); // 16
//! sqrt()
// 16=> 4
// 9=> 3
// 25=>5
// console.log(Math.sqrt(16));
// ==========================================================
// round Yaxlidlash;
// console.log(Math.round(2.5)); Yaxlidlash 
// ==========================================================
// trunc  butun qismini oladi;
// console.log(Math.trunc(2.9)); // Bu faqat kichigi bo'yicha yaxlidlaydi
// ===========================================================
// ceil yuqoriga qarab yaxlitlaydi;
// console.log(Math.ceil(2.122222)); // Bu faqat yuqorigaqarab yaxlitlaydi
// ===========================================================
// floor  pastga qarab yaxlitlaydi;
// console.log(Math.floor(2.99));
// ============================================================
// let son5 = Math.trunc(12.6);
// let son8 = Math.floor(12.6);
// let son6 = Math.round(12.5);
// let son7 = Math.ceil(12.2);
// console.log(son5, son6, son8, son7);
// ============================================================
// let sum = Math.sign(10) // 1
// let sum9 = Math.sign(-10) //-1
// let sum0 = Math.sign(0) // 0
// console.log(sum);
function getrenddom(a) {
    let run = parseInt(Math.random() * a)
    console.log(run);
}
getrenddom(20)