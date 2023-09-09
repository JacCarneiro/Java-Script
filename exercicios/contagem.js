var inicio =  10
var fim = 20
var passo = 5

if (inicio < fim){
    for(c=inicio; c<=fim;c+=passo){
        console.log(c)
    }
} else{
    for(c=inicio; c >= fim;c-=passo){
        console.log(c)
    }
}
