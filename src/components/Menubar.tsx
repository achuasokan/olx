import arrow from '../assets/arrow.png'

const Menubar = () => {
  return (
    <>
    <div className="flex h-10 p-2 shadow-md">
    <h1 className="ml-25 cursor-pointer hover:text-teal-700 font-semibold">ALL CATEGORIES</h1>
    <img src={arrow} alt="arrow icon" className='ml-2 font-bold'/>
    <h1 className="ml-28 cursor-pointer hover:text-teal-700">Cars</h1>
    <h1 className="ml-5 cursor-pointer hover:text-teal-700">Motorcycles</h1>
    <h1 className="ml-5 cursor-pointer hover:text-teal-700">Mobile Phones</h1>
    <h1 className="ml-5 cursor-pointer hover:text-teal-700">For Sale: Houses & Apartments</h1>
    <h1 className="ml-5 cursor-pointer hover:text-teal-700">Scooters</h1>
    <h1 className="ml-5 cursor-pointer hover:text-teal-700">Commercial & Other Vehicles</h1>
    <h1 className="ml-5 cursor-pointer hover:text-teal-700">For Rent:Houses & Apartments</h1>
    </div>

    </>
  )
}

export default Menubar