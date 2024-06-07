import React, { useState } from 'react'
import Admission from '../assets/admission.png'
import Admission1 from '../assets/1.png'
import Admission2 from '../assets/2.png'
import Admission3 from '../assets/3.png'
import Admission4 from '../assets/4.png'
import Admission6 from '../assets/6.png'




import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoPLM from "../assets/PLM.png"

import Carousel from '@material-tailwind/react'


import { Collapse, Button, Card, CardBody, Typography } from '@material-tailwind/react'
const Home = () => {

  const [openAnnouncement, setOpenAnnouncement] = useState(false)
  const [openAdvisory, setOpenAdvisory] = useState(false)

  const toggleOpenAnnouncement = () =>{
    setOpenAnnouncement((cur) => !cur)
  }

  const toggleOpenAdvisory = () =>{
    setOpenAdvisory((cur) => !cur)
    
  }

  const [count, setCount] = useState(0)
  const [margin, setMargin] = useState('0%')
  const [forward, setForward] = useState(true)


  const shiftImage = (count) =>{
    switch(count){
      case 0: 
        setMargin('0%')
        break
      case 1:
        setMargin("-10%")
        break
      case 2: 
        setMargin("-20%")
        break
      case 3:
        setMargin("-30")
        break
      case 4: 
        setMargin("-40%")
        break
      case 5: 
        setMargin("-50%")
        break

    }
  }

  if (forward){
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        if (count == 6){
          setForward(false)
        }else{
          setCount(count+1)
          shiftImage(count)
        }
      }, 3000);
    }
  } else{
    for (let i = 6; i > 0; i--) {
      setTimeout(() => {
        if (count == 0){
          setForward(true)
        }else{
          setCount(count-1)
          shiftImage(count)
        }
      }, 3000);
  }
}

  return (


    
    <>
      <div className='w-full h-full'> 
        <div className=' w-[100vw] h-[100vh] overflow-hidden'>
          <div className='w-[1000%] h-full flex flex-row'>
            <div className='w-[10%] h-full transition-all ' style={{marginLeft: margin}}>
              <img src={Admission} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-[10%] h-full '>
              <img src={Admission1} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-[10%] h-full '> 
              <img src={Admission2} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-[10%] h-full '>
              <img src={Admission3} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-[10%] h-full '>
              <img src={Admission4} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-[10%] h-full '>
              <img src={Admission6} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
        <div className=' md:grid md:grid-cols-2 md:gap-2 md:pt-3 md:bg-[#EEEA82]'>
          <div className='w-full md:w-[20rem] md:ml-10 lg:ml-[5rem] xl:w-[30rem] xl:ml-[10rem]'>
            <Button className='w-full bg-[#D64C4C] text-black text-lg rounded-none' onClick={toggleOpenAnnouncement}>
              Announcement
              <span className='ml-10'><FontAwesomeIcon icon={faCaretDown} size='2xl'/></span>
            </Button>
            <Collapse open={openAnnouncement}>
              <Card className='bg-[#994545] rounded-none text-white'>
                <CardBody>
                  <Typography className='bg-[#DE7373] text-xs'>PLMAT 2025: New website with modernization look and feature</Typography>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className='w-full md:w-[20rem] md:ml-10 lg:ml-[5rem] xl:w-[30rem]'>
            <Button className='w-full bg-[#626FE9] text-black text-lg rounded-none' onClick={toggleOpenAdvisory}>
              Advisory
              <span className='ml-10'><FontAwesomeIcon icon={faCaretDown} size='2xl'/></span>
            </Button>
            <Collapse open={openAdvisory}>
              <Card className='bg-[#7A77ED] rounded-none text-white'>
                <CardBody>
                  <Typography className='bg-[#4D73FB] text-xs'>Lorem ipsum dolor sit amet. Id facilis nihil ad porro doloribus et similique optio id molestias unde ab accusantium ipsam quo placeat minima. Non architecto voluptatem aut error corporis sit quidem dolorem!</Typography>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        <div className='md:bg-[#EEEA82] md:h-[3rem]'></div>
        <div className='h-[5rem] flex items-center md:h-[5rem] md:justify-center md:gap-5'>
          <img src={logoPLM} alt="" className='w-14' />
          <h1 className=' text-[0.45rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem]'>Copyright 1967 - 2022 Pamantasan ng Lungsod ng Maynila, All right Reserved</h1>
        </div>
      </div>



    </>
  )
}

export default Home
