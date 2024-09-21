import React from 'react';
// import '../Contact/contact.css';
import Cards from './Cards';
import CardData from './CardData'

const Contact = () => {
  return (
    
      <div className="container">
      <h2 className="text-center mt-4">Let's Discuss About My Courses</h2>
      <div className="row">
        {CardData.map((val) => (
          <div className="col-4">
            <Cards
              img={val.img}
              title={val.title}
              content={val.content}
              link={val.link}
            />
          </div>
        ))}
      </div>
      </div>
    
  );
}

export default Contact;


