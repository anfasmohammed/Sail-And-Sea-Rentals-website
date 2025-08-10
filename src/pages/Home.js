import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
      
      
    <div className={`flex items-center flex-col gap-6 justify-center h-full w-full  bg-[url("https://images.unsplash.com/photo-1531012278403-e5db3b774373?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-center bg-cover   `}> 
    <div className='flex flex-col w-full gap-3 justify-center items-center text-red-200 '>
    <h1 className='text-4xl px-2 text-center lg:text-6xl font-bold text-gray-950'>Your Journey Awaits on the Water!</h1>
    <h2 className='text-2xl px-2 text-center lg:text-4xl font-bold text-stone-100'>Explore the water like never before, rent a boat and make waves.</h2>
    </div>

    <button className='rounded-xl bg-gradient-to-r from-gray-700 to-lime-800 text-gray-950 hover:text-stone-100 font-mono px-5 lg:px-7 py-2 text-2xl font-semibold'><Link to={"/plans"}>Find your plan...</Link></button>
    

    </div>
      
    <Footer/>
    </div>
  )
}

export default Home