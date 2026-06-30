import img from "../../assets/images/SOWERE.png"
import advert from "../../assets/images/ginger.png"
<div className="absolute left-[-6px] top-0 w-3 h-3 bg-red-500 rounded-full"></div>
const VideoHero = () => {
  return (
    <div className='px-9 font-bold'>
      <h1 className='text-center text-4xl px-5 p-3.5'><img src={advert} alt="" /></h1>

      <div className='grid grid-cols-3 p-4 text-black'>
           <div className="p-4 ">
        <div className="flex items-center gap-2">
   
            <div className="w-6 h-6 bg-red-600"></div>
        <h1>Category: News</h1>
        </div>
        <p className="italic text-red-500">2 minutes ago</p>
        <h2 className="max-w-2xl">Natasha secures FG commitment for more CNG stations in Kogi</h2>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Work resumes as NUPRC workers suspend strike</h2>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Army Rescue Two Kidnap Victims, Kill Four Bandits In Benue, Taraba</h2>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Liverpool legend Dalglish announces cancer diagnosis</h2>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Cholera: Borno records 274 new cases in 24 hours as toll hits 4,204</h2>
      </div>
      <div >
      <img src={img} alt=""width={800}/>
      <h1 className="bg-[#E2E2E2] p-2 ">Demolish looters’ assets like kidnappers’ hideouts, Sowore seeks equal penalty</h1>
      </div>

      <div className="p-4">
        <h1 className="">Top News</h1>
        <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">INEC data leak: Actor Emeka Ike threatens action against Wike's aide</h2>
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
        <h2 className="font-black pt-1.5 font-serif">2027 polls: CBN targets N2.83tn cash in private hands</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif">Business & Economy</p>
        <hr />

<div className="flex">
        <h2 className="font-black pt-1.5 font-serif">FG scraps three-month terminal leave for civil servants</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif text-red-500">News</p>
        <hr />

       <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">School abductions: Protest in Oyo, Ogun as NUT begins nationwide rally today</h2>
        <img src={img} alt="" width={50}/>
        </div>
        <p className="font-black pt-1.5 font-serif">protest</p>
      </div>
      
      </div>
    </div>
  )
}

export default VideoHero
