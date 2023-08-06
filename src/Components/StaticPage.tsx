import Card from "./Card";
// import { BsArrowUpRight } from "react-icons/bs";

function StaticPage() {
  // Static pageunder the scrollable header
  return (
    <div>

    {/* Exlore section with buttons */}
    <div>

      <div className='w-screen relative'>
        <div className="flex justify-center items-center gap-4 z-10">
          <div className="flex justify-center items-center gap-4 rounded-full bg-white p-20">
            <a href="#" className="font-bold text-3xl">About</a>
          </div>
          <div className="flex justify-center items-center gap-4 rounded-full bg-white p-10">
            <a href="#" className="font-bold text-3xl">Store</a>
          </div>
          <div className="flex justify-center items-center gap-4 rounded-full bg-white p-20">
            <a href="#" className="font-bold text-3xl">Work</a>
          </div>
          <div className="flex justify-center items-center gap-4 rounded-full bg-white p-10">
            <a href="#" className="font-bold text-3xl">News</a>
          </div>
          <h1 className='z-0 absolute top-0 left-0 w-screen text-center font-bold text-[28rem] text-gray-500 opacity-50 tracking-wide'>Explore</h1>  
        </div>
      </div>
    </div>

    {/* Card section */}

    <div className="card-section flex justify-center gap-24">
      <Card/>
      <Card/>
    </div>


    {/* Leave a mesage section */}

    <div className="flex justify-center w-screen">
      <div>

      </div>
      <div className="w-1/6 flex justify-center">
        <h1 className="text-6xl text-white">Leave A Message</h1>
      </div>
    </div>


    {/* Footer */}

    <footer>
      <ul className="flex justify-end px-8 gap-8 text-white">
        <li>
          <a href="#" className="flex justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Instagram</h1>
          </a>
        </li>
        <li>
          <a href="#" className="flex justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Soundcloud</h1>
          </a>
        </li> 
        <li>
          <a href="#" className="flex justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Facebook</h1>
          </a>
        </li>
      </ul>
    </footer>
    </div>
  );
}

export default StaticPage;
