import img from "../../assets/images/pope.jpg"
import advert from "../../assets/images/ginger.png"
<div className="absolute left-[-6px] top-0 w-3 h-3 bg-red-500 rounded-full"></div>
const PunchHero = () => {
  return (
    <div className='px-9 font-semi-bold'>
      <h1 className='text-center text-4xl px-5 p-3.5'><img src={advert} alt="" /></h1>

      <div className='grid grid-cols-3 p- text-black'>
        <div className="relative">
           <div className="p-4 ">
  <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>

        <div className="flex items-center gap-2 ">
   
            <div className="w-6 h-6 bg-red-600"></div>
        <h1>Category: News</h1>

        </div>
    <div className="absolute -left-[6px] top-6 w-3 h-3 rounded-full bg-red-500"></div>
        
        <p className="italic text-red-500">2 minutes ago</p>
        <h2 className="max-w-2xl">VIDEO: Outrage as trailers drive on road median in Port Harcourt</h2>

    <div className="absolute -left-[6px] top-6 w-3 h-3 rounded-full bg-red-500"></div>
         <p className="italic text-red-500">2 minutes ago</p>
        <h2>VIDEO: Passersby rescue man swept away by floodwaters in DeltaWork resumes as NUPRC workers suspend strike</h2>


         <p className="italic text-red-500">2 minutes ago</p>
        <h2>You can’t pray away bad roads, bandits, Nollywood actress Njoku tells Christians</h2>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>King Charles III knights actor Idris Elba for youth advocacy</h2>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>VIDEO: Dapo Abiodun, Seyi Tinubu arrive Ojude Oba festival</h2>
      </div>
      </div>
      <div >
      <img src={img} alt=""width={800}/>
      <h1 className="bg-[#E2E2E2] p-2 h-40 font-serif text-2xl">Pope is for all teams, but I am for Real Madrid, Pontiff jokes</h1>
      </div>

      <div className="p-4">
        <h1 className="">Top News</h1>
        <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">VIDEO: I spend N60,000 on weed daily - Ice Prince</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif">News</p>
        <hr />
          <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">RCCG clarifies Adeboye's political stance, denies endorsing any party</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif">News</p>
        <hr />
        <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">VIDEO: PFN demands urgent government action on insecurity after three-day national fast</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif">Business & Economy</p>
        <hr />

<div className="flex">
        <h2 className="font-black pt-1.5 font-serif">VIDEO: Actress Funke Akindele solicits support for evicted special-needs children in Lagos</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif text-red-500">News</p>
        <hr />

       <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">Victims loot XM ponzi scheme office in Badagry after crash</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif">protest</p>
      </div>
      
      </div>
    </div>
  )
}

export default PunchHero
