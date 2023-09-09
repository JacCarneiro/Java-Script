function contar(){

    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar!'

    } else{     

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
    if (i < f){
        for(c=i; c<=f;c+=p){
            res.innerHTML += c
        }
    } else{
        for(c=i; c >= f;c-=p){
            res.innerHTML += c
        }
        }   
    }
}
