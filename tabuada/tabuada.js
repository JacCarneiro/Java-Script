function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //metodo de veirificação
    if(num.value.length == 0) {
        window.alert('por favor digite um número')
    } else {
        let n = Number(num.value)//convertendo a varialve num em um valor númerico
        let c = 1
        tab.innerHTML = '' //metodo para limpar o resultado
        while (c <= 10){
            let item = document.createElement('option')//criando elementos pelo javascript
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) //adiciona dentro do tab o elemento item
            c++
        }
    }
}
    /*var n1 = 2
    var res = 0
    var c = 0
    while (c < 10){
        c += 1
        res = n1 * c
        console.log(`${n1} X ${c} = ${res}`)
    }*/
