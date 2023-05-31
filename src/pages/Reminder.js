import React, { useEffect } from 'react'
import { useState } from 'react';


const Reminder = ()=>{
    const [reminder , setReminder] = useState([])

    

    useEffect(()=>{
        fetch("/api/reminders")
            .then(response => response.json())
            .then(data => setReminder(data.reminders))
            .catch(err=> console.log("Error fetching data", err))
    },[])
    console.log('reminder pk',reminder)
    
    return (
    <div className='p-3 m-3 bg-white  w-3/4 md:w-2/4 md:h-3/4 rounded-lg'>
        <div className='flex justify-between mb-6'>
            <h1 className='text-2xl bold'>Reminders</h1>
            <button className='text-2xl px-5 '>+</button>
        </div>
        <div className='py-10'>
        <ul className='py-2'>
                {reminder.map(task => (
                  <>
                  <div className='bg-sky-200 w-full h-[1px]'></div>
                  <li key={task.id} className='py-2'>{task.text}</li>
                  </>
                ))}
                <div className='bg-sky-200 w-full h-[1px]'></div>
            </ul>

            <div className='flex  justify-end m-3 '><button className='bg-red-400 p-2 rounded hover:bg-red-600' >Delete All</button></div>
            
            

        </div>
        
        
    </div>
    );
}

export default  Reminder