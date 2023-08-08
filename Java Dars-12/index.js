// function maxDiff(list) {
// for (i of list) {
// console.log(Math.min(list));
// if (Math.max(i) - Math.min(i)) {
//     console.log(i);
// }
// }
// };
// maxDiff([2, 3, 4, 5, 6, 7, 4, 5, 3])
// let name = [2, 3, 4, 5, 6, 7, 4, 5, 3]
// console.log(Math.max(name));
// for (i of name) {
//     console.log(Math.max(i));
// }
// console.log(name);
// for (let i = 0)
// const getbayid = () => {
//     user = user.fill((valyus) => {
//         return console.log(valyus);

//     })
// }
// getbayid()
// let res = user.filter((v) => {
//     console.log(v);
// })
// console.log(res);
let user = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.5, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.2, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damaz" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracer" },
]
const getbayid = () => { ////   2000 chi yildan oldin chiqqan mashinalar ro'yxait
        let res = user.filter((v) => {
            return v.year < 2000
        })
        user = res
        console.log(res);
    }
    // getbayid()
const getbay = () => {
        let res1 = user.filter((v) => {
            return v.year > 2010
        })
        user = res1
        console.log(res1);
    }
    // getbay()
const getbays = () => {
        let res2 = user.sort((a, b) => {
            return a.engine - b.engine
        })
        user = res2
        console.log(res2);
    }
    // getbays()
const getbayd = () => {
        let res4 = user.sort((a, b) => {
            return a.year - b.year
        })
        user = res4
        console.log(res4);
    }
    // getbayd()
const getbayf = () => {
        let res5 = user.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        user = res5
        console.log(res5);
    }
    // getbayf()
const getbayname = () => {
    let res7 = user.map((v) => {
        return v.year < 2000 ? {...user, status: "o'rta" } : v
    })
    user = res7
    console.log(res7);
}
getbayname()