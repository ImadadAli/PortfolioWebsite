import React, { useEffect } from 'react'
import me from "../../assates/me.jpeg"
import "../Home/Home.css"
import Typed from 'typed.js';
import { useRef } from 'react';


const Home = () => {
  const typedref = useRef(null)
  useEffect(() => {
    const options = {
      strings: ["Welcome, I am ImadadAli HasanAli Sunasara, Frontend Devloper, Hybried Devloper(React Native)"],
      typeSpeed: 100,
      backSpeed: 50,
      // loop: true
    }
    const typed = new Typed(typedref.current, options)
    return () => {
      typed.destroy() // Add parentheses to call the destroy method
    };
  }, []);
  return (
    <>
      <div className="caontainer main ">


        <div className="left">
          <h2 ref={typedref}></h2>
        </div>


        <div className="right ">
          <div className="img ">
            <img src={me} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
