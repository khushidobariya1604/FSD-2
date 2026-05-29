import { useState } from "react";
function US7(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault()
        var n1=parseInt(formdata.n1)
        var n2=parseInt(formdata.n2)
        let result;
        if(formdata.calc==="add"){
            result=n1+n2
            alert(`Addition is ${result}`)
        }
        else if(formdata.calc==="sub"){
            result=n1-n2
            alert(`subtraction is ${result}`)
        }
        else if(formdata.calc==="mul"){
            result=n1*n2
            alert(`Multiplication is ${result}`)
        }
        else if(formdata.calc==="div"){
            if(n2===0){
                alert("Can not devide by zero")
            }
            else{
                result=n1/n2
                alert(`Division is ${result}`)
            }
            
        }
        else{
            alert("Please select valid fromula")
        }
        
    }
    return(
        <>
            <form onSubmit={handlesubmit} action="">

                <label>n1 :</label>
                <input type="number" name="n1" min="0" onChange={handlechange}/><br/>

                <label>n2 :</label>
                <input type="number" name="n2"  min="0" onChange={handlechange}/><br/>

                <select name="calc" onChange={handlechange} id="">
                    <option value="add">Addition</option>
                    <option value="sub">Subtraction</option>
                    <option value="mul">Multiplication</option>
                    <option value="div">Division</option>
                </select><br/><br/>
                
                <input type="submit" onSubmit={handlesubmit} />
            </form>
        </>
    )
}
export default US7