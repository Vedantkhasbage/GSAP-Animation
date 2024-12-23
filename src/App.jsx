import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
function App() {
   //we use useref to create gsap animation just we have give ref to that div or elements
  //  const animatediv=useRef();
  //  const animatediv2=useRef();
  // useGSAP(()=>{
  //   gsap.to(animatediv.current,{
  //     x:1000,
  //     rotate:360,
  //     duration:2,
  //     delay:2
  //   })


  //   gsap.from(animatediv2.current,{
  //     x:1000,
  //     rotate:360,
  //     duration:2,
  //     delay:2
  //   })
  // })

  
  // return <div className='h-screen w-full bg-black'>
  //   <div ref={animatediv} className="h-48 w-48 bg-white">
       
  //   </div>
  //   <div ref={animatediv2} className="h-48 w-48 bg-green-300"></div>
  // </div>


  //if we want to run our animation depend on something 
  // const random=gsap.utils.random(-500,500,100);  //in between -500 to 500 and divide by 100
  // const [val,setval]=useState(0);
  // useEffect(() => {
  
  //     gsap.to(".hh", {
  //       x: val, // Use the updated value of `val`
  //       duration: 2,
  //     });
    
  // }, [val]); // R

  // return <div className='h-screen w-full bg-green-300 flex-col flex justify-center items-center'>
  //   <div  className='hh h-64 w-64 bg-white'></div>
  //   <button onClick={()=>{setval(random)}} className='h-12 w-32 bg-blue-500 rounded-3xl mt-32'>Move</button>
  // </div>

  const [Xaxis,setXaxis]=useState(0);
  const [Yaxis,setYaxis]=useState(0);
   
  const randomX=gsap.utils.random(-500,500,50);
  const randomY=gsap.utils.random(-500,500,50);
  const ghost=useRef();

  useEffect(()=>{
   
    gsap.to(ghost.current,{
      x:Xaxis,
      y:Yaxis,
      duration:2
    })
  },[Xaxis,Yaxis])

  return <div className='h-screen w-full bg-white flex justify-center items-center flex-col'>
    <img ref={ghost} className='h-64 w-64' src="https://png.pngtree.com/png-vector/20240821/ourmid/pngtree-3d-smoky-horror-ghost-girl-on-transparent-background-png-image_13580492.png" alt="" />
     
     <button className='h-12 w-32 rounded-3xl bg-blue-300' onClick={()=>{
      setXaxis(randomX);
      setYaxis(randomY);
     }}>Move</button>

  </div>
}

export default App