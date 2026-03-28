const eventemitter=require("events");
const ee=new eventemitter();

ee.on("square",(s)=>{
    if(s<0){
            console.log("Value of side must be positive");
    }
    else{
            console.log(`perimeter of square is : ${4*s}`);
    }
})
ee.emit("square",4)

ee.on("circle",(r)=>{
    if(r<0){
            console.log("Value of radius must be positive");
    }
    else{
            console.log(`perimeter of square is : ${2*3.14*r}`);
    }
})
ee.emit("circle",2.0)