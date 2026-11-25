let username=prompt("enter username");
let userroll=Number(prompt("enter userroll"));
let userclass=prompt("enter userclass");

let user={
    username,
    userroll,
    userclass,

    assignvalue:function(){
        this.username=username;
        this.userroll=userroll;
        this.userclass=userclass;
    },
    greet:function(){
        console.log(this.username,this.userroll,this.userclass);
    }
}

user.assignvalue(username,userroll,userclass);
user.greet();
