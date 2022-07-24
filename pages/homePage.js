import React from "react";
import Image from "next/image";
// import heroImage from "../public/images/heroimage.jpg";
import heroImage from "../public/images/s2.png";
import Logo from "../public/images/logo0.png";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
        <div className=" text-center md:mx-20 md:pt-32 pt-28 ">
            <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
               {/* <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1> */}
               <img className="inline-block  text-5xl h-52  font-bold mt-0 mb-6" src="images/logo0.png" />
              <h3 className="text-3xl font-bold mb-8">Subeading</h3>
                <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>

            </div>
            <div>
            <a
							href="#"
							className="inline-block font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							See My Portfolio !
						</a>  
         
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
