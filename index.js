function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function named(){
        console.log("Hallo mate")
    }
}

function returnsAnAnonymousFunction(){
    return function(){  
        console.log("You don't mess with the Peaky Blinders")
    }
}