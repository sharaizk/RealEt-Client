import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Nav from './Header'
const Header = () => {

    const [isOpen,setOpen] = useState(false)

    const toggle = ()=>{
        setOpen(!isOpen)
    }

    return (
        <header >
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Nav isOpen={isOpen} toggle={toggle}/>
        </header>
    )
}

export default Header
