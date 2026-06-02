import { useContext } from "react";
import {Num} from './t1.jsx';
import {Css} from './t2.jsx';

export default function T3(){
    const n=useContext(Num);
    const c=useContext(Css);

    return(<>
    <h1 style={c}>Output of Expression  n1*n2/n3  is  :  {n.n1*n.n2/n.n3}</h1>
    </>)
}