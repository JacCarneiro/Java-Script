let num = [5,8,2,9]
num.sort()
num.push(1)
console.log(`Os valores do vetor são ${num}`)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encotrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}
