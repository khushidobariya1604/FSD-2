const eventemitter=require("events");
const ee=new eventemitter();

ee.on("first" ,()=>{
    console.log("First Event");
})
ee.emit("first");

ee.on("second",(a,b)=>{
    console.log(`Multiplication is : ${a*b}`);
})
ee.emit("second",5,10);

ee.on("write",()=>{
    console.log("Written");
    ee.emit("append");
});
ee.on("append", ()=>{
    console.log("appended");
})
ee.emit("write");
console.log("Thank You !");