
import { Link } from "react-router-dom";
import img1 from '../images/gtr34.png';
import img2 from '../images/r34.webp';

function Home() {
  return (
    <div>
              <nav className="bg-blue-500 w-full">
            <ul className="flex flex-row items-center justify-end h-16 gap-20 mr-12 font-bold">
                <li className="animate-navtop1">
                    <Link to="/">Home</Link>
                </li>
                <li className="animate-navtop2">
                    <Link to="/about">About</Link>
                </li>
                <li className="animate-navtop3">Contact</li>
            </ul>
        </nav>
      {/* First Section */}
      <div className="w-full h-96">
        <div className=" float-right relative animate-faderight">
          <img className="w-[900px] " src={img1} alt="" />
        </div>
        <div className="w-96 ml-8 absolute top-32 left-24">
          <p className="text-4xl font-bold animate-fadeleft">
            We will help you find your <span className="text-blue-500">Dream</span> car.
          </p>
          <p  className="text-gray-400 mt-4 animate-fadeleft ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam aliquid laboriosam itaque eligendi.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-56 flex items-center justify-center animate-fadeleft">
        <img className="w-72 rounded-lg" src={img2} alt="" />
        <div className="ml-16 flex flex-col">
          <h2 className="uppercase text-4xl mb-8 font-bold">About</h2>
          <p className="w-96 ">
            FSGJKA DNLIWUDBJ ALUBDUFSB LAVUVBD SUBVGU DGVSUGV DUSUVDU
          </p>
        </div>
      </div>


      <div className='flex flex-col mt-24 items-center justify-center'>
        <h2 className='font-bold text-2xl'>hahahahaha</h2>
        <p className='text-gray-400'>ahgfdywegfuwegfuewufiuwf</p>
      </div>


<div className='flex flex-row mt-16 mb-20 gap-20 items-center justify-center'>
  <div className=' w-72 h-72 rounded-lg shadow-2xl hover:scale-105'>
    <h3>cars</h3>
    <p>kvsijgdisdj</p>
  </div>
  <div className='shadow-2xl  w-72 h-72 rounded-lg hover:scale-105'>
    <h3>cars</h3>
    <p>kvsijgdisdj</p>
  </div>
  <div className='shadow-2xl  w-72 h-72 rounded-lg hover:scale-105'>
    <h3>cars</h3>
    <p>kvsijgdisdj</p>
  </div>
</div>
    </div>
  );
}

export default Home;
