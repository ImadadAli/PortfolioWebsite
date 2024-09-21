import React from 'react'
import "../Projects/project.css"
import data from "./projectData"



const Projects = () => {
 
  return (
    <>
      <h2 className="text-center mt-5 font" data-aos="fade-down">Let Me show my projects</h2>
      <hr className="bottom-border" />
      {data.map((val) => (
        <div className="container" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <h3 className="mainHeader">{val.title}</h3>
          <div className="box ">
            <h4>Technology</h4>
            <p>{val.tech}</p>
            <h4>Discription</h4>
            <p>
              {val.dis}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects
