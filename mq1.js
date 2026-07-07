const mg=require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/mdb6");

const myschema = new mg.Schema({course:String,category:String,
    fees:Number,instructor:String,active:Boolean,duration:Number,
    mode:{type:String,enum:["online","offline"]}
})

const mymodel = new mg.model("courses",myschema)

const myfun = async()=>{
    const c = [{course:"MERN",category:"Web Development",fees:25000,instructor:"ABC",active:true,duration:3,mode:"offline"},
    {course:"Python",category:"Programming",fees:18000,instructor:"XYZ",active:true,duration:3,mode:"online"},
    {course:"Data Science",category:"Data Analysis",fees:28000,instructor:"PQR",active:false,duration:4,mode:"offline"},
    {course:"ML",category:"AI",fees:30000,instructor:"DEF",active:true,duration:6,mode:"offline"},
    {course:"UX/UI Design",category:"Design",fees:25000,instructor:"MNO",active:false,duration:4,mode:"online"}]

    const result = await mymodel.insertMany(c);
    console.log(result);
    console.log("-----------------")

    // const t1=await mymodel.findOne({instructor:"MNO"});
    // console.log(t1._id)
    // const t2=await mymodel.findByIdAndUpdate(t1._id,{$set:{duration:7,fees:19000}},{new:true})
    // console.log(t2)
    // const t3=await mymodel.findByIdAndDelete(t1._id)
    // console.log("Deleted",t3)

    // 1. Display name,fees,duration & mode of the course having 2nd highest fees.
    const t4=await mymodel.find({},{category:0,active:0,instructor:0,_id:0}).sort({fees:-1}).limit(1).skip(1)
    console.log(t4)

    // 2. update fees to 22000,duration to 3 month,mode to online for course named "cloud computing",if no such course is available then insert the new document
    const t5=await mymodel.updateOne({course:"Cloud Computing"},{$set:{fees:22000,duration:3,
        mode:"online"}},{upsert:true})
    console.log(t5)

    // 3. display offline courses having fees lessthan 25000.
    const t6=await mymodel.find({fees:{$lt:25000},mode:"offline"})
    console.log(t6)

    // 4. display all actice courses whose duration is >=3 and excluse courses that are online
    const t7=await mymodel.find({$and:[{active:true},{duration:{$gte:3}}],$nor:[{$mode:"online"}]})
    console.log(t7)

    // 5. count total number of active and online courses.
    const t8=await mymodel.countDocuments({active:true,mode:"online"})
    console.log(t8)
}
myfun();