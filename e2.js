const eventemitter=require("events");
const ee=new eventemitter();

var fun1=(m)=>{
    console.log(`Message From fun1... ${m}`)
}
var fun2=(m)=>{
    console.log(`Message From fun2... ${m}`)
}
ee.on("e1",fun1)
ee.on("e1",fun2)

ee.on("e1",()=>{
    console.log("Another Function !")
})
ee.on("e2",fun1)
ee.on("e2",fun2)

ee.removeListener("e1",fun1);

var c=ee.listenerCount("e1")
ee.removeAllListeners("e2");

console.log(`count is ${c}`)


ee.emit("e1","Event Task !")
ee.emit("e2","Welcome Studenet !")

