//                                  Distirakcha
// let name="webbrain"
// let obj={
//     name:"webbrain",
//     title:"It center",
//     info:{age:18}
// }
// // let {name:web,title,info:{age}}=obj
// // console.log(info);
// // console.log(web);
// function getdata({name,title,info:{age}}){
//     console.log(name,title,age);
// }
// getdata(obj)
// let arr =["webbrain","it center","academiy"]
// // let [bir,ikki,uch]=arr
// // console.log(ikki);
// function getdata([bir,ikki,uch]){
//     console.log(bir,ikki,uch);
// }
//  getdata(arr)
// ======================================================================================================
// console.log(time.getHours());//------Soatni chiqarib beradi
// console.log(time.getMinutes());//------Minutinini chiqarib beradi
// console.log(time.getSeconds());//------Sekundini chiqarib beradi
// console.log(time.getMilliseconds());//------Millisekundini chiqarib beradi
// =============================================================================================
// console.log(time.getDate());//----Kunni chiqarib beradi
// console.log(time.getDay());//-----Hafata kunini chiqarib beradi
// console.log(time.getFullYear());//---Nechanchi yilligini chiqarib beradi
// console.log(time.getMonth());//---Oylarni chiqarib beradi
// let time = new Date()
// let data=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
// console.log(data);let data = new Date()
const getname = (simbole) => {
    return `${ data.getDate()}${ simbole }${data.getMinutes()}${ simbole }${data.getSeconds()}`

}
console.log(getname(`/`));