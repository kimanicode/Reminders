import React from 'react';
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
     
        <nav>
            <ul className='flex justify-items-start'>
            <Link to={'/reminders'}>
                 <li className='p-3'>Reminder</li>
            </Link>
            <Link to ={'/abouts'}>
                  <li className='p-3'>About</li>
             </Link>
            </ul>
        </nav>
    )  
    
}

export default  Header;