const d=['gokul',19,'audi','harley',"I'm spiderman"]
for (var ele in d){
    console.log(d[ele])
}
console.log(d.length)
a={
    car:"Benz",
    model:"V6",
    airbags:10,
    wheels:4,
    color:"white"
}
console.log(a['car'])
console.log(a.airbags)
var some='model'
console.log(a[some])
console.log(a)
a.wheels=10

a.sunroof={ispresent:"yes"}
console.log(a.sunroof.ispresent)
for (var ele in a){
    console.log(ele +" " + a[ele])
    if (typeof a[ele] =="object")
    {
        for (var val in a[ele])
        {
            console.log(val +" "+a[ele][val])
        }
    }
}

a=()=>console.log("one line function")
a()