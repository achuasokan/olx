import olx_logo from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import {useNavigate} from 'react-router-dom'
import { userAuth } from '../context/AuthContext'


type popUp = {
  onloginPop :any
}

const Navbar = ({onloginPop}: popUp) => {
  const { user, logout} = userAuth()
  
  // const navigate = useNavigate()
  return (
   <div className='flex p-4 ml-5 bg-slate-100 shadow-md'>
    <img src={olx_logo} className="w-11 h-9" alt='olx logo' />

    <div className='flex border-2 border-black border-spacing-1 w-64 p-2 ml-5 bg-white'>
      <img src={lens} className='w-6 h-5 mt-1' alt='lens logo'/>
      <input placeholder='Location'  className='ml-3 outline-none'/>
      <img src={arrow}  className='w-8 h-7' alt='arrow' />
    </div>

    <div className='flex h-12 ml-4 border-2 bg-white'>
      <input placeholder='Search: Cars, Mobile phones and more' className='ml-3 w-[700px] outline-none'/>
      <img src={search} alt=''  className=''/>
    </div>

    <div className='flex h-12 p-3 ml-10 cursor-pointer'>
      <h1 className='font-semibold'>English</h1>
      <img src={arrow} alt='arrow icon'  className='w-8 h-7'/>
     </div>

    <div className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
      {user ? (
        <>
          <h1 className='font-bold'>{user.displayName}</h1>
          <button onClick={logout} className='ml-2 cursor-pointer'>Logout</button>
        </>
      ) : (
        <h1 className='font-bold cursor-pointer' onClick={onloginPop}>Login</h1>
      )}
    </div>

    <div className=' w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500'>
      <h1 className='font-bold ml-5'>+ SELL</h1>
     </div>
   </div>
  )
}

export default Navbar