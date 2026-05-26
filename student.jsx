import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

import Shome from "./shome";
import Sproject from "./sproject";
import Snopage from "./snopage";
import img1 from "../assets/a.jfif";
import img2 from "../assets/b.jfif";
import img3 from "../assets/c.jfif";

function Student(){
    const s=[{name:"Project1",desc:"lorem1...",image:img1},
        {name:"Project2",desc:"lorem2...",image:img2},
        {name:"Project3",desc:"lorem3...",image:img3}
    ]

    return(
        <div>
            <Router>
                <ul><li> <Link to="/">Home</Link></li>
                    <li> <Link to="/project">Project</Link> </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Shome/>}/>
                    <Route path="/project" element={<Sproject data={s}/>}/>
                    <Route path="*" element={<Snopage/>}/>
                </Routes>
            </Router>
            
        </div>
    )
}export default Student;