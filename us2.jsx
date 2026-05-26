import {useState} from "react";
import img1 from "./assets/a.jfif";
import img2 from "./assets/c.jfif"
function US2(){
    const[count,setcount]=useState(0);
    const[image,setimage]=useState(img1);
    function handleCountinc(){
        if(count<50)
        {setcount(count+1);}
    }
    function handleCountdec(){
        if(count>0) 
            {setcount(count-1);}
        
    }
    function handleImage(){
        if(image===img1){
            setimage(img2)
        }
        else{
            setimage(img1)
        }
    }

    return(<>
    <button onClick={handleCountinc}>Inc + </button>
    <button onClick={handleCountdec}>Dec -</button>

    <h1>Count is {count}</h1>
    
    <button onClick={handleImage}>Change Image</button>
    <img src={image} width="300"></img>
    
    </>)
}
export default US2;