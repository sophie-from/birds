import axios from 'axios'
import BirdFinder from "./components/BirdFinder";
import Navigation from './components/nav';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <div>
       <div className = "flex bg-linear-to-b from-yellow-300 shrink to-amber-600 flex-col items-center justify-start h-screen drop-shadow-xl">
       <Header/>

    <div id="mainUI" className='flex flex-row shrink text-orange-50 w-2/3 h-3/4 p-3 justify-center m-5 rounded-xl mb-12 shadow-2xl align-middle mt-10'>
    <div id="mainTextarea" className='flex flex-col shrink p-3 w-1/2 h-full font-lucky  drop-shadow-[0_1.2px_1.2px_rgba(18,41,108,1)] text-8xl p-3 ml-6 text-center justify-center items-center'>
      <h1 id= "mainText"className='font-lucky shrink text-orange-50  drop-shadow-[0_1.2px_1.2px_rgba(18,41,108,1)] text-8xl p-3 ml-6 text-center'>Have you seen this <span className="hover:text-rose-600">bird?</span></h1>      
    </div>
    <div className='flex flex-col p-3 w-1/2 shrink drop-shadow-xl justify-center items-center' id="birdInfo">
    <BirdFinder/>
    </div>
</div>
<Footer/>
    </div>
    </div>
  )
}

export default App;
