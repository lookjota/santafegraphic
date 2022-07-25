import React from "react";
import Image from "next/image";
// import heroImage from "../public/images/heroimage.jpg";
import heroImage from "../public/images/s2.png";
import Logo from "../public/images/logo0.png";
import { Element } from "react-scroll";

function Home() {
	return (
<div>
    <div className=" relative overflow-hidden h-screen h-1/3 rounded-3xl">
    {/* <div className=" relative overflow-hidden h-screen h-1/3 rounded-3xl"> */}
    <img src="/images/bg.jpg" className="absolute h-full w-full object-cover rounded-3xl"/>
    <div className="inset-0 bg-black opacity-25 absolute">
    </div>
    <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-center items-center">
                <div className="flex justify-between items-center">
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
                <img className="h-44" src="images/logo0.png"/>
            </h1>
            {/* <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
                Life-changing
            </h1> */}
            <a href="#" className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10">
                Start Now
            </a>
        </div>
    </div>
</div>
<div className="pb-10"></div>
</div>





		// <Element id="home" name="home">
    //   <div>
		// 	{/* <div className="bg-indigo-900 relative overflow-hidden h-screen">
    //     <img src="/images/bg.jpg" className="absolute h-full w-full object-cover" /> */}
    //     <div className=" text-center md:mx-20 md:pt-32 pt-28 ">
    //         <div className="text-center  text-gray-800 py-20 px-6">
    //            {/* <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1> */}
    //            <img className="inline-block  text-5xl h-44  font-bold mt-0 mb-6" src="images/logo0.png" />
    //           <h3 className="text-xl font-italic mb-8">Entregamos materiais e impressões de alta qualidade em Brasília-DF.</h3>
    //           {/* <h3 className="text-3xl font-bold mb-8">A Gráfica Santa Fé entrega materiais e impressões de alta qualidade em Brasília-DF.</h3> */}
    //             {/* <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a> */}
    //             {/* <a
    //               href="#"
    //               className="inline-block font-semibold text-white md:mt-10 mt-5 pt-5 bg-rose-500 rounded-md w-60 h-16 text-lg hover:bg-rose-600 "
    //             >
    //               Fazer Orçamento
    //             </a>   */}
    //         </div>
		// 		</div>
		// 	</div>
      
		// </Element>
	);
}

export default Home;
