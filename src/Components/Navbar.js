import { Link } from "react-scroll"
export default function Navbar() {
  return (
    <div className="w-screen h-16 text-black mt-[35px] flex justify-between px-20 items-center ">
        <div className="logo">
                <img src="image 5.svg" alt="logo" />
        </div>
        <div className="Navigation flex justify-evenly items-center h-full w-[70%] text-2xl  font-Pop">
            <Link to="Home" smooth={true} duration={500} className=" cursor-pointer  hover:border-b-2 transition-all hover:border-b-buttonBlue">Home</Link>
            <Link to="AboutUs" smooth={true} duration={500} className=" cursor-pointer  hover:border-b-2 transition-all hover:border-b-buttonBlue">About us</Link>
            <Link to="Agenda" smooth={true} duration={500} className=" cursor-pointer  hover:border-b-2 transition-all hover:border-b-buttonBlue">Agenda</Link>
            <Link to="FAQ" smooth={true} duration={500} className=" cursor-pointer  hover:border-b-2 transition-all hover:border-b-buttonBlue">FAQ</Link>
            <Link to="ContactUs" smooth={true} duration={500} className=" cursor-pointer  hover:border-b-2 transition-all hover:border-b-buttonBlue">Contact us</Link>
        </div>
        <div className="flex flex-col h-full justify-center"> 
        <button className="Join bg-buttonBlue  w-32 rounded-lg h-11 font-Robo text-white">Join us</button>

        </div>
    </div>
  )
}

