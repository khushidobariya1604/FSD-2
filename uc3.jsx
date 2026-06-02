import { useContext } from "react";
import {CN,Branch} from './uc1.jsx';

export default function UC3(){
    const c=useContext(CN);
    const b=useContext(Branch);

    return(<>
    <h1 style={{color:'red'}}>{c}</h1>
    <h3 style={{fontStyle:"italic",color:'green'}}>{b}</h3>
    </>)
}