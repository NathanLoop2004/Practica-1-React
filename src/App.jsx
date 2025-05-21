
import Cards from './components/cards'
import './App.css'

function App() {
 const arrayCards = [
    {
        name: "Bill Mahoney",
        image: "/photo1.png",
        tittle: "PRODUCT OWNER",
    },
      {
        name: "Saba Cabrera",
        image: "/photo2.png",
        tittle: "ART DIRECTOR",
    },

      {
        name: "Shae Le",
        image: "/photo3.png",
        tittle: "TEACH LEAD",
    },
       {
        name: "Skylah Lu",
        image: "/photo4.png",
        tittle: "UX DESINGNER",
    },
  {
        name: "Griff Richards",
        image: "/photo5.png",
        tittle: "DEVELOPER",
    },
      {
        name: "Sthan Jhon",
        image: "/photo6.png",
        tittle: "DEVELOPER",
      }
    ]
    
 
    
  return (
    <>
    {/* Esta parte es la cabecera */}
      <section className='w-[375px] h-[200px]  border-black '>
        {/* Este section es el titulo y boton */}
         <section className=' border-black h-[100px] flex flex-row items-center'>
          <h1 className='font-bold text-[32px] ml-4'>The creative crew</h1>
          <button className='border-black  ml-5'>
            <img src='/Practica-1-React/icons/icons8-luna-48.png' />
          </button>
         </section>

       {/*Esta parte es el Who we are */} 
       <section className='flex flex-col'>
        <h1 className='font-bold ml-10 text-[20px]'>Who we are</h1>
        <p className='ml-10'>We are team of creatively diverse. driven innovative
          individuals working in various locations form the world.
        </p>
       </section>
  
      </section>







       {/* Cards Part */}
       <section className='w-[375px] h-[200px] mt-6 border-block grid grid-cols-2'>

       {arrayCards.map((card, index)=>(
        <Cards 
        key={index} 
        name ={card.name}
        img = {card.image}
        tittle = {card.tittle}
        isEven = {index % 2 === 1}
        />
       ))}  
       </section>
    
    </>
  )
}

export default App
