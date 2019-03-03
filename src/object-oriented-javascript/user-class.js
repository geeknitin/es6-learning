class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'just logged in');
    }

    logout(){
        console.log(this.email, 'just logged out');
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var users = [userOne, userTwo];

class Admin extends User {
    constructor(){
        super();
    }

    deleteUser(user) {
        users = users.filter((u => u.email != user.email));
    }
}


var admin = new Admin('admin@gmail.com', 'Admin');


userOne.login().updateScore().updateScore().logout();

console.log(userOne);


