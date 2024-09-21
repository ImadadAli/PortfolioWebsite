import React from 'react';
import '../Contact/contact.css';
import Cards from './Cards';
import CardData from './CardData'

const Contact = () => {
  return (
    <>
      <h2 className="text-center mt-4">Let's Discuss About My Courses</h2>
      <div class="row row-cols-md-3 g-2 ">
        {CardData.map((val) => (
          <div className="col">
            <Cards
              img={val.img}
              title={val.title}
              content={val.content}
              link={val.link}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;


