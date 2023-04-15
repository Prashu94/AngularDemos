var users = [{
    "username":"andy",
    "password":"andy123"
},{ 
    "username":"johndoe",
    "password":"johndoe123"
},{
    "username":"mercy",
    "password":"mercy123"
}]

exports.LoginUser = function(username,password){
    for(var i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password)
        return users[i].username;
    }     
}
