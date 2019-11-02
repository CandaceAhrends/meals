const USER = 'USER';

export const localStorage = {
    getUser: function(){
        return  JSON.parse(window.localStorage.getItem( USER ));
    },
    saveUser: function(user){
        window.localStorage.setItem(USER, JSON.stringify(user))
    }
}