import React from 'react'














export default function Cards(props) {
  
  
  
    return (
    /* Section photos + tittle */
   <section className=" ml-5  border-black w-[140px] mb-3">
     {/* Section Photo*/}
      <section className='flex flex-row relative'>
        <img className='w-[140px] h-[170px]  border-black ' src={props.img}/>
        <h1 className='rotate-90 origin-left   border-black h-10 w-[140px] absolute left-35 top-[-20px]'>{props.tittle}</h1>
      </section>
       {/* Section Tittle */}
       <section>
        <h1 className='font-bold'>{props.name}</h1>
       </section>




   </section>

  )



}
