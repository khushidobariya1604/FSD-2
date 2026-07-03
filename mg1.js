const mg=require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/mgB6").then(()=>
{console.log("Coonected Successfully")}).catch((e)=>{console.log(e)});

var myschema = new mg.Schema({
    username:String,
    email:{type:String,required:true},
    age:Number,
    active:Boolean,
    doj:{type:Date,default:new Date().toLocaleDateString()}
});

mg.pluralize(null);

const mymodel = new mg.model("person",myschema)
const myfun = async()=>{
    try{
        const data = new mymodel({
            username:"ABC",
            email:"abc@gmail.com",
            age:30,
            active:true
        })
        const result = await data.save();
        console.log(result);
    }
    catch(e){
        console.log(e)
    }
}
myfun();
