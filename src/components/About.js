import React from 'react'
import about from "../images/about.jpg"

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto bg-slate-300' id='about'>
        <div><h1 className='text-3xl font-semibold'>About-Me</h1></div>
        <div className=''><p className=' text-slate-700'>My-Introduction</p></div>
        <div className='lg:flex items-center lg:w-[50vw]  gap-x-5'>
            <div><img src={about} className='h-[350px] w-[400px] rounded-lg sm:"mx-auto flex items-center justify-center'></img></div>
            <div className='md:h-[600px] md:w-[600px] flex items-center justify-center'>
                <p className='text-slate-600 '>Hey there,👋 I'm Abhishek a 20-year-old ECE undergrad who is passionate about Software Development, UI/UX Design and Product Management. Currently, I'm pursuing my Engineering from UIIT Shimla. I share my learnings through speaking engagements and write-ups. ✍🏻</p>
            </div>
        </div>
    </div>
  )
}

export default About