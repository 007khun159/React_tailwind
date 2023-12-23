import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'




function Card() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img  className ='w-20 mx-auto mt-[-3rem]' src={Single}/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold '>$194</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '>500 GB</p>
            <p className='py-2 border-b mx-8 mt-8 '>1 Granted User</p>
            <p className='py-2 border-b mx-8 mt-8 '>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>


        <div className='w-full shadow-xl flex flex-col p-4 md:my-2  my-8 rounded-lg hover:scale-105 duration-300'>
          <img  className ='w-20 mx-auto mt-[-3rem]' src={Double}/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold '>$194</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '>500 GB</p>
            <p className='py-2 border-b mx-8 mt-8 '>1 Granted User</p>
            <p className='py-2 border-b mx-8 mt-8 '>Send up to 2 GB</p>
          </div>
          <button className='text-[#00df9a] bg-black rounded-md font-medium w-[200px] my-5 mx-auto px-6 py-3'>Start Trial</button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 md:my-2 my-8 rounded-lg hover:scale-105 duration-300'>
          <img  className ='w-20 mx-auto mt-[-3rem]' src={Triple}/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold '>$194</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '>500 GB</p>
            <p className='py-2 border-b mx-8 mt-8 '>1 Granted User</p>
            <p className='py-2 border-b mx-8 mt-8 '>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
    
    </div>
  </div>
  )
}

export default Card