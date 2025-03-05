import { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../assets/arrow.png"


const api_key = import.meta.env.VITE_NUTHATCH_API_KEY ;
console.log("API Key:", api_key); // Debug API key

const BirdFinder = () => {
    console.log("BirdFinder component is rendering!"); // Debug rendering

    const [birds, setBirds] = useState([]);
    const [error, setError] = useState(null);
    const [fetched, setFetched] = useState(false);

    const getBird = async () => {
        console.log("Fetching bird..."); // Debug function call

        try {
            const response = await axios.get( "http://localhost:5000", {
                headers: { api_key: api_key,
                 }
            });
            
           
            console.log("API Response:", response.data);
            console.log(response.data.entities);
             // Debug API response
            setBirds(response.data.entities);
            console.log(birds);
          
            setFetched(true);
            
            
           
            setError(null);
        } catch (err) {
            console.error("API Error:", err);
            setError("No birds here");
        }
    };
    useEffect(()=> {
      console.log(birds);
      birds.map(bird => console.log(bird.name)
      )
      
      
      
    }, [birds])

    return (
      <>
      {!fetched ? ( <>
           
        <button
          onClick={getBird}
          className="hover:bg-pink-600 w-2/3 text-white  bg-indigo-800 font-lucky text-6xl p-3 rounded-xl drop-shadow-3xl"
        >
          What bird?
        </button>
        </>
      ) : birds.length === 0 ? (
        <h2>No birds</h2>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {(() => {
            const mainQuestion = document.getElementById("mainTextarea");
            mainQuestion.innerHTML = ` <h1 className='text-orange-50  drop-shadow-[0_1.2px_1.2px_rgba(18,41,108,1)] text-8xl p-3 ml-6 text-center'>This One!</h1>
                            <img src='${arrow}'></img>`
            const randomBird = birds[Math.floor(Math.random() * birds.length)];
            console.log(randomBird);
            return (
              <>
              
              <div className="flex flex-col w-6/7 bg-white my-3 p-4 rounded-lg drop-shadow-md object-contain items-center justify-center">
              {randomBird.images && randomBird.images.length > 0 && (
                  <img className="p-1 max-w-full h-64" src={randomBird.images[0]} alt={randomBird.name} />
                )}
                <h1 className="font-quicksand text-xl font-bold text-black">{randomBird.name}</h1>
                <ul className="text-black">
                  <li><span className="font-bold">Scientific name:</span> {randomBird.sciName}</li>
                  <li> <span className="font-bold">You can meet them:</span> {randomBird.region.join(", ")}</li>
                </ul>
                <button onClick={getBird} className="p-2 hover:bg-pink-600 w-2/3 text-orange-50 bg-indigo-800 font-lucky text-2xl rounded-xl mt-3">Another Bird?</button>

                </div> 
                
              </>
            );
          })()}
        </div>
      )}
    </>
  );
};

        export default BirdFinder;
