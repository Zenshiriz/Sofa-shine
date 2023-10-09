import React from 'react'
import data from '../sofaData' 
import furnituresHeroImg from '../assets/furnitures-hero-img.png'
import FurnitureCards from '../components/FurnitureCards'
import { Link } from 'react-router-dom'
export default function Furnitures() {
    const filteredData = data.data.filter(filteredData => filteredData.type === "normal")
    const furnituresElement =  filteredData.map(furnitureEl =>(
     <Link to={`/${furnitureEl.name}`}>
     <FurnitureCards img={furnitureEl.img} name={furnitureEl.name} price={furnitureEl.price} key={furnitureEl.id} />
     </Link>
    ))

    const filteredLivingData = data.data.filter(filteredData => filteredData.type === "living")
    const livingElement =  filteredLivingData.map(furnitureEl =>(
      <Link to={`/${furnitureEl.name}`}>
      <FurnitureCards img={furnitureEl.img} name={furnitureEl.name} price={furnitureEl.price} key={furnitureEl.id} />
      </Link>

    ))

    const filteredLuxuryData = data.data.filter(filteredData => filteredData.type === "luxury")
    const luxuryElement =  filteredLuxuryData.map(furnitureEl =>(
      <Link to={`/${furnitureEl.name}`}>
      <FurnitureCards img={furnitureEl.img} name={furnitureEl.name} price={furnitureEl.price} key={furnitureEl.id} />
      </Link>

    ))

    const filteredReclinerData = data.data.filter(filteredData => filteredData.type === "recliner")
    const reclinerElement =  filteredReclinerData.map(furnitureEl =>(
      <Link to={`/${furnitureEl.name}`}>
      <FurnitureCards img={furnitureEl.img} name={furnitureEl.name} price={furnitureEl.price} key={furnitureEl.id} />
      </Link>

    ))
  return (
    <>
    <div className='h-[50vh] md:h-[90vh] w-full px-4 md:px-10 py-20 md:py-40 lg:py-50' style={{background:`url(${furnituresHeroImg})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        <div className=' uppercase text-gray-900 font-Poppins font-bold text-2xl md:text-3xl lg:text-5xl leading-6'>
      <h3>luxuries</h3>
      <h3>magnificent</h3>
      <h3>sofa’s & furniture </h3>
        </div>
    </div>
    <div className='' id='furniture'>
     <h3 className=' font-Poppins font-bold text-xl md:text-2xl lg:text-3xl uppercase text-center my-6'>furniture's</h3>
     <div className='flex flex-wrap gap-6 justify-center px-3 pb-6'>
      {furnituresElement}
     </div>
    </div>
    <div className='' id="living">
     <h3 className=' font-Poppins font-bold text-xl md:text-2xl lg:text-3xl uppercase text-center my-6'>living</h3>
     <div className='flex flex-wrap gap-6 justify-center px-3 pb-6'>
      {livingElement}
     </div>
    </div>
    <div className='' id='recliner'>
     <h3 className=' font-Poppins font-bold text-xl md:text-2xl lg:text-3xl uppercase text-center my-6'>recliner</h3>
     <div className='flex flex-wrap gap-6 justify-center px-3 pb-6'>
      {reclinerElement}
     </div>
    </div>
    <div className='' id='luxury'>
     <h3 className=' font-Poppins font-bold text-xl md:text-2xl lg:text-3xl uppercase text-center my-6'>luxury</h3>
     <div className='flex flex-wrap gap-6 justify-center px-3 pb-6'>
      {luxuryElement}
     </div>
    </div>
    </>
  )
}
