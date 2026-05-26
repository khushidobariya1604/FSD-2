import {useState} from "react";
function US1(){
    const[count,setcount]=useState(0);

    function handleCount(){
        setcount(count+1);
    }

    return(<>
    <button onClick={handleCount}>Click </button>
    <h1>Count is {count}</h1>
    </>)
}
export default US1;