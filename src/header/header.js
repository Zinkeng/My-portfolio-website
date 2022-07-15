import React from 'react'
import Logo from './logo';
import Navbar from './Navbar'
const  Header = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='column'>
               <Logo/>
            </div>
            <div className='column'>
                <Navbar/>
            </div>
        </div>
    </div>
  )
}
export default Header;
