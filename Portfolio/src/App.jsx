import "./App.css";
import React, { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Photo from "./components/Photo";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Quotes from "./components/Quotes";
import Spotify from "./components/Spotify";
import Loader from "./assets/Loader.json";
import Lottie from "lottie-react";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex bg-black justify-center items-center h-screen w-screen">
          <div className="w-1/2 md:w-[20%]">
            <Lottie animationData={Loader} />
          </div>
        </div>
      ) : (
        <>
          <div class="flex flex-col justify-center">
            <header class="flex  h-20  opacity-85 rounded-2xl shrink-0  xl:md:mx-40  lg:mx-30 md:mx-10 max-sm:m-8 mt-8 max-xl:mb-6 ">
              <a class="mr-6 flex items-center" href="">
                <span class="text-4xl md:text-5xl font-bold jersey-25-charted-regular ">
                  Aaryan
                </span>
              </a>

              <div class="ml-auto  items-center gap-4 flex">
                <a
                  class="inline-flex h-9 w-max items-center justify-center   rounded-md text-lg px-4 py-2 md:text-2xl font-semibold transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                  href="#contact"
                >
                  Contact
                </a>
                <a
                  class="inline-flex h-9 w-max items-center text-lg md:text-2xl font-semibold  justify-center rounded-md  px-4 py-2   transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                  href="#projects"
                >
                  Projects
                </a>
              </div>
            </header>

            <div className="md:grid xl:grid-rows-7 mb-5 xl:grid-cols-7 xl:px-40  lg:h-[75rem] xl:h-full gap-5 lg:px-30  lg:grid-cols-5 lg:grid-rows-8 md:px-10 md:grid-rows-3 md:grid-cols-3 ">
              <div className="xl:col-span-2 xl:row-span-5  max-xl:hidden sm:visible contain-content  ">
                <div className="xl:mt-[3.2rem] ">
                  <Photo />
                </div>
              </div>
              <div className="xl:col-span-5 xl:row-span-3   contain-content lg:col-span-5 lg:row-span-3 md:col-span-3">
                <div className="xl:mt-[3.2rem] ">
                  <About />
                </div>
              </div>
              <div className="xl:row-span-2 xl:col-span-1 lg:col-span-2 lg:row-span-4 md:col-span-1 ">
                <Resume />
              </div>
              <div className="xl:col-span-4 xl:row-span-4 contain-content lg:col-span-3 lg:row-span-4 md:col-span-2">
                <TechStack />
              </div>
              <div className="xl:col-span-3 xl:row-span-2 lg:col-span-5 md:col-span-3">
                <Skills />
              </div>
            </div>
            <div
              id="projects"
              className="xl:px-28 md:px-10 lg:px-20 lg:mt-40 xl:mt-20"
            >
              <Projects />
            </div>
            <div className="md:mt-12 md:grid md:grid-rows-3 md:grid-cols-3 xl:px-40 lg:px-30 md:px-10 h-[35rem] gap-5  ">
              <div className="md:col-span-1 contain-content ">
                <Links />
              </div>
              <div className="col-span-2 row-span-3 contain-content">
                <Spotify />
              </div>
              <div className="md:col-span-1 md:row-span-2 contain-content">
                <Quotes />
              </div>
            </div>
            <div
              id="contact"
              className="max-sm:mt-[36rem] max-sm:ml-4 max-sm:mr-4 mt-24"
            >
              <Contact />
            </div>
            <footer className="h-[5rem] mt-32">
              <div className="h-full w-full bg-pink-950 ">
                <div className="flex justify-center">
                  <div className="pt-4 libre-barcode-128-text-regular max-sm:text-3xl  md:text-5xl">
                    Designed and Developed by Aaryan
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
