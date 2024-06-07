import React, { useState } from 'react'
import schoolpic from "../assets/SchoolPic.jpg"
import { Button } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LogoPLM from "../assets/PLM.png"
import { useNavigate } from 'react-router-dom'

const Plmat = () => {

    const [showApply, setShowApply] = useState(false)
    const navigate = useNavigate()

    const toggleShowApply = () =>{
        setShowApply(true)
    }

    const toggleCloseApply = () =>{
        setShowApply(false)
    }

    const gotoProceed = () =>{
        navigate('/plmat_instructions')
    }

  return (
    <>
        <div>
            <div>
                <img src={schoolpic} alt="" className=' opacity-65 xl:w-full'   />
            </div>
            <div className="md:flex md:ml-5 lg:ml-20 xl:ml-[15rem] mt-2">
                <div className='flex justify-center gap-10 mt-2'>
                    <div>
                        <Button className='rounded-none bg-[#FD3E3E]' onClick={toggleShowApply}>APPLY</Button>
                    </div>
                    <div>
                        <Button className='rounded-none bg-[#034AFF]'>LOGIN</Button>
                    </div>
                </div>
                <div className='block text-[0.6rem] text-center mt-4 bg-[#F36060] text-white w-72 m-auto md:w-[27rem]'>
                    <h1>Reminder: To apply for PLM Admissions, please review the requirements, prepare and gather the required documents. Complete any necessary forms and submit your application by the deadline.</h1>
                </div>
            </div>
            <div className={`${showApply ? "hidden" : "md:flex md:justify-center md:gap-5"}`}>
                <div className='bg-[#D9D9D9] mt-3 text-center h-[22rem] md:w-[21rem] lg:w-[30rem] lg:h-[17rem] xl:w-[40rem] xl:h-[15rem]'>
                    <h1 className=' font-medium'>WHO MAY APPLY</h1>
                    <p className='text-sm mt-2 w-[17rem] lg:w-[28rem] xl:w-[38rem] text-center m-auto '>The Pamantasan ng Lungsod ng Maynila (PLM) will start accepting online applications for freshmen students (undergraduate programs) for Academic Year (AY) 2024-2025 beginning on December 1, 2023.For AY 2024-2025, there will be an on-site PLM Admission Test (PLMAT). Minimum health protocols will be observed to ensure the safety of student-applicants. The PLMAT is a 4-hour examination consisting of sub-tests in English, Science, Mathematics, Filipino, and Abstract Reasoning. Passing the PLMAT is one of the requirements for admission to PLM.</p>
                </div>
                <div className='bg-[#D9D9D9] mt-3 h-[20rem] md:h-[22rem] md:w-[21rem] lg:w-[30rem] lg:h-[17rem] xl:w-[40rem] xl:h-[15rem]'>
                    <h1 className=' font-medium text-center'>ABOUT PLM</h1>
                    <p className='text-sm mt-2 w-[16rem] m-auto text-justify lg:w-[28rem] xl:w-[38rem]'>1. Senior High School (SHS) student who is currently enrolled in Grade 12 at a Department of Education (DepEd) accredited senior high school with a Grade 11 general weighted average (GWA) of 80 or above.</p>
                    <p className='text-sm w-[16rem] mt-2 m-auto text-justify lg:w-[28rem] xl:w-[38rem]'>2. Senior High School graduate from a DepEd accredited senior high school with a Grade 11 general weighted average (GWA) of 80 or above and has not taken any college or university units or programs during the application period.</p>
                </div>
            </div>
            <div className='md:flex md:items-center md:justify-center md:ml-14 lg:ml-6 xl:ml-[-6rem]'>
                <div className='mt-2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.215549408406!2d120.97398871478896!3d14.586789989811258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2336770053%3A0x1b731714778d3506!2sPamantasan%20ng%20Lungsod%20ng%20Maynila!5e0!3m2!1sen!2sph!4v1658283044869!5m2!1sen!2sph"  className='w-full lg:w-[25rem] lg:h-[10rem] xl:w-[35rem]'></iframe>
                </div>
                <div className='hidden md:block ml-5'>
                    <img src={LogoPLM} alt="" className='w-52'/>
                </div>
                <div className='mt-3  md:w-[40rem] lg:w-[22rem] xl:ml-10' >
                    <h1 className='text-sm text-center m-auto w-[18rem]  xl:w-[25rem] '>PAMANTASAN NG LUNGSOD NG MAYNILA UNIVERSITY OF THE CITY OF MANILA</h1>
                    <h1 className='text-sm mt-2 w-[18rem] m-auto text-justify xl:w-[25rem]'>Pamantasan ng Lungsod ng Maynila (PLM) is the first and only charted and autonomous university funded by a city government which is situated inside the historic walled area of Intramuros, Manila, Philippines</h1>
                    <h1 className='text-sm w-[18rem] mt-2 m-auto font-semibold xl:w-[25rem]'>For more information, you may contact the Admission Office.</h1>
                    <h1 className={`${showApply ? "hidden" : "w-[18rem] m-auto text-[0.95rem] mt-2 xl:w-[25rem]"} `} ><span><FontAwesomeIcon icon={faEnvelope} className='mr-2' /></span><span className='font-semibold'>Email:</span> admission_office@plm.edu.ph</h1>
                </div>
            </div>
            <div className='w-full h-[2rem]'></div>
        </div>

        {showApply && (
            <div className='absolute top-[4.5rem] bg-white w-full h-screen'>
                <div className='flex justify-center w-full items-center '>
                    <img src={schoolpic} alt="" className='h-screen w-full object-cover opacity-10 absolute top-[1rem] '/>
                </div>
                <div className='top-[2rem] right-0 mr-5 absolute cursor-pointer' onClick={toggleCloseApply}>
                    X
                </div>
                <div className='absolute top-[5rem] text-center font-semibold text-lg w-full md:top-[8rem] lg:top-[10rem]'>
                    <div className='md:w-full md:flex md:justify-center'>
                        <h1 className='md:w-[40rem] lg:text-3xl lg:w-[60rem] xl:w-[80rem]'>Greetings and welcome to the PLMAT application. Please read these guidelines carefully before registering to prevent miscommunication, deception, and other issues.</h1>
                    </div>
                    <div className='md:w-full md:flex md:justify-center mt-5 '>
                        <h1 className='md:w-[40rem] lg:text-3xl lg:w-[50rem] xl:w-[80rem]'>Before proceeding, ensure you have followed all the directions and have all the necessary paperwork for your application. You will see an instructional message before continuing, so please pay close attention to the instructions.</h1>
                    </div>
                    <div className='mt-5'>
                        <Button className='bg-[#FA4A4A]' onClick={gotoProceed}>PROCEED</Button>
                    </div>
                </div>
                <div className='h-[5rem] absolute bottom-0 flex items-center md:h-[5rem] md:justify-center md:gap-5 md:ml-[10rem] lg:ml-[15rem] xl:ml-[25rem] '>
                    <img src={LogoPLM} alt="" className='w-14' />
                    <h1 className=' text-[0.45rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem]'>Copyright 1967 - 2022 Pamantasan ng Lungsod ng Maynila, All right Reserved</h1>
                </div>
            </div>
        )}


    </>
  )
}

export default Plmat
