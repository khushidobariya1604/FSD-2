import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './home';
import About from './about';
import Contact from './contact';
import Nopage from './nopage';

function My(){
    return(
        <>
        <div>
        <Router>
            <ul><li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<Nopage/>} />
            </Routes>
        
        </Router>

    </div>
    </>
    )
}
export default My;