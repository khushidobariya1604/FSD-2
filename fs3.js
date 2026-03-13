function test(name,callback){
    console.log("First execution",name);
    callback();
}
function last(){
    console.log("Last Execution");
}
test("Node JS",last)

const message= function(){
    console.log("Hello...!!")
}
setTimeout(message,3000)