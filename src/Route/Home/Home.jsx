import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col bg-[#FF7B54] w-screen h-screen  items-center justify-center">
      <h1 className="text-white font-bold mb-20 text-lg">
        BATU GUNTING KERTAS
      </h1>
      <div className="flex flex-col">
        <Link to="/offline">
          <div className="bg-[#FFB26B] hover:bg-[#FFB22B]  text-white text-center font-bold py-2 px-4 rounded m-1">
            MAINKAN OFFLINE
          </div>
        </Link>
        <Link to="/online">
          <div className="bg-[#FFB26B] hover:bg-[#FFB22B]  text-white text-center font-bold py-2 px-4 rounded m-1">
            MAINKAN ONLINE
          </div>
        </Link>
        <Link to="/tentang">
          <div className="bg-[#FFB26B] hover:bg-[#FFB22B]  text-white text-center font-bold py-2 px-4 rounded m-1">
            TENTANG APLIKASI
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
