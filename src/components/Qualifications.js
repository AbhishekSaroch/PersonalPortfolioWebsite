import React from 'react'
import {MdWork} from "react-icons/md"
const Qualifications = () => {
  return (
    <div className='bg-slate-300' id='qualifications'>
        <div className='flex items-center flex-col'>
            <p className='text-3xl font-bold'>Qualifications</p>
            <p className='text-[12px]'>My Educational Qualifications Are As Follows</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-3 mt-4 border-2'>
            <p className=' lg:text-2xl sm:text-xl,font-bold  '>B.Tech Electronics and Communication Engineering</p>
            <p className='lg:text-xl lg:font-semibold'>University Institute Of Technology</p>
            <div className='flex items-center gap-x-3'>
            <p><MdWork/> </p><p className='font-bold'> 2020-2024</p>
            <p className='font-bold'>CurrentCGPA -8.98</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-3 mt-2 border-2'>
            <p className='lg:text-2xl'>Senior Secondary School</p>
            <p className='lg:text-xl lg:font-semibold'>TR.DAV.Public Sr. Sec School Kangoo</p>
            <div className='flex items-center gap-x-3'>
            <p><MdWork/></p><p className='font-bold'>2019-2020</p>
            <p className='font-bold'>Percentage-91.8</p>
            </div>
        </div>
    </div>
  )
}

export default Qualifications