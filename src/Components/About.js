import React from "react";

export default function About(props) {
  let myStyle={
    backgroundColor:props.mode==="dark"?'#381b81':"white",
  color:props.mode==="light"?"black":"white"
  }

  return (
    <div className="container my-4" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion"  id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             This app helps you to analyse your text in term of number words , characters and approximate time to read your text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"s="collapseTwo"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            TextUtils is a free utility app which provides different facilities regarding the text format like change into uppercase,lowercase, capitalized
            text.Also, You can directly copy the text into clipboard and remove the extra spaces in your text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextUtility app is a browser compatible app  which can run on different browser according to the user preference.
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
