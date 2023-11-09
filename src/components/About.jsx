import {Link,Routes,Route} from "react-router-dom"
import AboutUs from "./AboutUs"
import Mission from "./Mission"
import OurValues from "./OurValues"


export default function About(){
    return (
        <>
        <h2>About Page</h2>
        <nav>
            <Link to="us">About us</Link>
            <Link to="mission">Our mission</Link>
            <Link to="values">Our values</Link>
        </nav>

        <Routes>
            <Route path="/us" element={<AboutUs/>}></Route>
            <Route path="/mission" element={<Mission/>}></Route>
            <Route path="/values" element={<OurValues/>}></Route>
        </Routes>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quae tempora quaerat perferendis sint est corrupti nemo. Ipsum laborum commodi quidem dolores, minima, error, reiciendis consequatur consequuntur officiis repudiandae magni?</p>
        </>
        
    )
}