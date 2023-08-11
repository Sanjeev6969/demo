import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '../style/Style.css'
import Home from './home'
import About from './About'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Qaulification from './Qualifications'
const Stage1 = () => {
    return(
        <BrowserRouter>
        <header>
            
            <Link to="/About"><button>About</button></Link>
            <Link to="/Portfolio"><button>Portfolio</button></Link>
            <Link to="/Experience"><button>Experience</button></Link>
            <Link to="/Qualification"><button>Qaulification</button></Link>
            
        </header>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Portfolio' element={<Portfolio/>}></Route>
        <Route path='/Experience' element={<Experience/>}></Route>
        <Route path='/Qualification' element={<Qaulification/>}></Route>
        </Routes>
        <footer>Footer</footer>
        </BrowserRouter>
    )
}

export default Stage1