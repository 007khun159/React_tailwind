import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'


function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4 '>aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1</p>
        <div className='flex  justify-between md:w-[75%] my-6'>
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-3'>

        <div>
          <h6 className='font-medium text-gray-400'>Solution</h6>
          <ul>
            <li className=' py-2 text-sm'>Analytics</li>
            <li className=' py-2 text-sm'>Marketing</li>
            <li className=' py-2 text-sm'>Commerce</li>
            <li className=' py-2 text-sm'>Insight</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className=' py-2 text-sm'>Pricing</li>
            <li className=' py-2 text-sm'>Documentation</li>
            <li className=' py-2 text-sm'>Guide</li>
            <li className=' py-2 text-sm'>Insight</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className=' py-2 text-sm'>About</li>
            <li className=' py-2 text-sm'>Blog</li>
            <li className=' py-2 text-sm'>Job</li>
            <li className=' py-2 text-sm'>Press</li>
            <li className=' py-2 text-sm'>Careers</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer