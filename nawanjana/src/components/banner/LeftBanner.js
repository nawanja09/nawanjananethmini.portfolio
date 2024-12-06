import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.","Mobile Developer.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize">Nawanjana Nethmini</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I am an undergraduate software engineer with a foundation in JavaScript, TypeScript, and Java, and expertise in frameworks like React and Node.js. 
            My experience in building dynamic and responsive web applications has honed my abilities in both front-end and back-end development.
            Passionate about making a positive impact through technology, I enjoy collaborating in team environments to create innovative solutions. 
            I am eager to leverage my skills and enthusiasm in a professional setting to contribute meaningfully to the field of Information Technology.
          </p>
        </div>

        <Media/>
        
      </div>

      
  );
}

export default LeftBanner;
