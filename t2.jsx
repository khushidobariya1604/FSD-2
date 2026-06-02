import { createContext } from "react";
import T3 from './t3.jsx';

const Css=createContext();

export default function T2(){
    const mycss={color:'orange',fontSize:'55px'}
    return(<>
    <Css.Provider value={mycss}>
        <T3/>
    </Css.Provider>
        
    </>)

}export {Css}
