import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function About() {
  const [text] = useTypewriter({
    words: ["a Full Stack Developer", "a UI/UX Designer", "a DSA Enthusiast"],
    loop: {},
    typeSpeed: 85,
    deleteSpeed: 50,
  });
  return (
    <div className="bg-pink-300 max-sm:m-8 md:h-[35rem] lg:h-[27.2rem] xl:h-[23rem] md:w-[100%] rounded-2xl  ">
      <div className=" space-x-4 ">
        <div>
          <h3 className=" text-7xl p-5 font-extrabold text-blue-700 righteous-regular mb-3">
            Hey, I am Aaryan
          </h3>
          <div>
            <span className="name p-5  text-7xl tangerine-regular  font-extrabold name-animated">
              {text}
            </span>
            <span style={{ color: "pink" }}>
              <Cursor size={500} cursorStyle="/" />
            </span>
          </div>
        </div>
      </div>
      <p className="pl-5 pr-5 pt-3 pb-5 righteous-regular text-xl text-pink-950 font-semibold leading-relaxed">
        I am a Pre-Final year student at IIIT Kota and an SDE Intern at Cashfree Payments. 
        My passion lies in building scalable systems and AI-driven solutions. 
        From orchestrating autonomous agents to optimizing distributed systems, 
        I love solving complex problems with code. Welcome to my portfolio.
      </p>
    </div>
  );
}

export default About;
