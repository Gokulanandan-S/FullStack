var a=10
console.log( " this is value var before changing" + " "+a)
var a=1545
console.log( " this is value var after changing" + " "+a)
{
    var a=123
    console.log( " this is value var inside block" + " "+a)

}
console.log( " this is value var after block" + " "+a)
let b=10
console.log( " this is value let before changing" + " "+b)
b=1545
console.log( " this is value let after changing" + " "+b)
{
    let b=123
    console.log( " this is value let inside block" + " "+b)

}
console.log( " this is value let after block" + " "+b)
const c=15
console.log( " this is value let after changing" + " "+b)
{
    
    console.log( " this is value let inside block" + " "+c)
}

if (a!=0){
    console.log(" value of a "+a)
}
else{
    console.log("value of b "+b)
}

for(i=1;i<c;i+=2){
    console.log(i)
}
j=5
while(j<c)
{
    console.log(j)
    j++
}
