import Header from "../components/header";
import BirdFinder from "../components/BirdFinder";

const HomePage = () => {
    return (
        <>
        <div className = "flex flex-1 pb-10 flex-wrap scroll-smooth bg-gradient-to-b  from-yellow-300 shrink to-amber-600 flex-col items-center drop-shadow-xl">

    <div id="mainUI" className='flex flex-row flex-1 shrink text-orange-50 w-2/3 p-3 justify-center m-5 rounded-xl mb-12 shadow-2xl align-middle mt-10'>
    <div id="mainTextarea" className='flex flex-col shrink p-3 w-1/2 h-full font-lucky  drop-shadow-[0_1.2px_1.2px_rgba(18,41,108,1)] text-8xl p-3 ml-6 text-center justify-center items-center'>
      <h1 id= "mainText"className='font-lucky shrink text-orange-50  drop-shadow-[0_1.2px_1.2px_rgba(18,41,108,1)] text-8xl p-3 ml-6 text-center'>Have you seen this <span className="hover:text-rose-600">bird?</span></h1>      
    </div>
    <div className='flex flex-col p-3 w-1/2 shrink drop-shadow-xl justify-center items-center' id="birdInfo">
    <BirdFinder/>
    </div>
</div>
{/* <div id="Quiz" className='flex flex-row flex-1 shrink text-orange-50 w-2/3 h-3/4 p-3 justify-center m-5 rounded-xl shadow-2xl align-middle mt-5'>helo</div> */}
    </div>
    </>
    )
}


export default HomePage