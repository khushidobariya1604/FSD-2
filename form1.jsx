import { useState } from "react";
function Form1(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target
        setformdata({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        if(formdata.un==="" || formdata.eid===""){
            alert("Please Enter Username and Email")
        }
        else if(formdata.pass.length > 8){
            alert("Please Enter Valid Password (length < 8)")
        }
        else if(formdata.pass !== formdata.cpass){
            alert("Password and Confirm Password are not same !")
        }
        else{
            alert(`Thank You ! ${formdata.un}..
                Email : ${formdata.eid}
                Gender : ${formdata.gender}`)
        }
        
    }
    return(
        <>
            <form onSubmit={handlesubmit} action="">
                <label>Username:</label>
                <input type="text" name="un" id="" onChange={handlechange}/><br/><br/>

                <label>Email :</label>
                <input type="email" name="eid" id="" onChange={handlechange}/><br/><br/>

                <label>Password:</label>
                <input type="password" name="pass" id="" onChange={handlechange}/><br/><br/>

                <label>Confirm Password:</label>
                <input type="password" name="cpass" id="" onChange={handlechange}/><br/><br/>

                <label>Message</label>
                <textarea name="msg"onChange={handlechange} ></textarea><br/><br/>

                <label>Gender</label>
                <input type="radio" name="gender" value="male" onChange={handlechange} id="" />Male
                <input type="radio" name="gender" value="female" onChange={handlechange} id="" />Female<br/><br/>

                <select name="city" onChange={handlechange} id="">
                    <option value="ahmedabad">ahmedabad</option>
                    <option value="rajkot">rajkot</option>
                </select><br/><br/>

                <input type="submit" onSubmit={handlesubmit} />
            </form>
        </>
    )
}
export default Form1