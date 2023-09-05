class User {
    constructor(thisfronted, thispassword) {
        this.Login = thisfronted
        this.password = thispassword
    }
    Login = "Muhammadjon"
    password = 12345
    age = 18
    getname() {
        console.log(`Foydalanuvchi logini:${this.Login} Paroli:${this.password} Yoshi:${this.age}`);
    }
}
let user1 = new User("fronted", 7726700)
console.log(user1);
user1.getname()