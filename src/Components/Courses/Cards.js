import React from 'react';
import "./cards.css"


function Cards(props) {
  return (
    <>
      {/* <div className="container d-">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img
                src={props.img}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href={props.link} className="btn btn-success">
                  Go To Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
<div className="container col m-1 justify-content-center mx-auto">
      <div className="card">
        <img src={props.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.content}
          </p>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </> 
  );
}

export default Cards
// hello imadad ali how are you