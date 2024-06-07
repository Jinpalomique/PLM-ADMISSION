import React from 'react'
import applicationform from "../assets/ApplicationForm.png"
import gmail from "../assets/Gmail.png"
import viewstatus from "../assets/View Status.png"
import printapplication from "../assets/PrintApplication.png"
import scanupload from "../assets/ScanUpload.png"
import printtest from "../assets/PrintTest.png"
import { Button } from '@material-tailwind/react'

const PlmatInstructions = () => {
  return (
    <>
    <div className='w-full h-full bg-[#EFCECE]'>
        <div>
            <div className=' text-start ml-3'>
                <h1 className='text-xs font-semibold lg:text-2xl'>1. Fill up all the necessary blanks and requirements</h1>
            </div>
            <div className='flex justify-center items-center mt-3'>
                <img src={applicationform} alt="" />
            </div>
        </div>
        <div className='mt-3'>
            <div className='ml-3'>
                <h1 className='text-xs font-semibold lg:text-2xl'>2. Check your email regularly for updates on your account.</h1>
            </div>
            <div className='flex justify-center mt-2'>
                <img src={gmail} alt="" />
            </div>
            <div className=' ml-3 mt-2'>
                <h1 className='text-xs font-semibold lg:text-2xl'>Please be patient, as your application is being evaluated before your account is sent.</h1>
            </div>
        </div>
        <div className='mt-3'>
            <div className='ml-3 mr-5'>
                <h1 className='text-xs font-semibold lg:text-2xl'>3. Regularly monitor the status of your application by logging into your PLM admission account.</h1>
            </div>
            <div className='mt-3'>
                <img src={viewstatus} alt="" />
            </div>
        </div>
        <div>
            <div className='ml-3 mt-3 mr-5'>
                <h1 className='text-xs font-semibold text-justify lg:text-2xl'>4. After you have fulfilled all the Application Requirements, please patiently watch your PLM account and attention on the view status for the next steps.</h1>
            </div>
            <div className='mt-3 ml-3 mr-5'>
                <h1 className='text-xs font-semibold text-justify lg:text-2xl'>5. After evaluating the information and requirements, print the Application Form. Then upload the scanned-signed Application Form with an ID picture [2x2 ID Picture].</h1>
            </div>
            <div className='flex justify-center'>
                <img src={printapplication} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={scanupload} alt="" />
            </div>
        </div>
        <div>
            <div className='mt-3 ml-3 mr-5'>
                <h1 className='text-xs font-semibold text-justify lg:text-2xl'>6. Check the Application Form's status at the PLM Admission Account. Once the application form has been successfully reviewed, check your PLM Account for the PLMAT exam schedule.</h1>
            </div>
            <div className='mt-3 ml-3 mr-5'>
                <h1 className='text-xs font-semibold text-justify lg:text-2xl'>7. On the specified examination date, bring two (2) signed exam permits  with an ID picture (2x2 colored with white background) and the signed Application Form with ID picture (2x2 colored with white background).</h1>
            </div>
            <div className='flex justify-center'>
                <img src={printtest} alt="" />
            </div>
        </div>
        <div className='flex justify-center mt-3'>
            <Button className='rounded-none bg-[#FA4A4A] text-xl'>APPLY NOW</Button>
        </div>
        <div className='h-[2rem] bg-[#EFCECE]'></div>
    </div>
    </>
  )
}

export default PlmatInstructions
