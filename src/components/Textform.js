import React, { useState } from "react";
function Textform(props) {
  const [text, setText] = useState();
  const settoUppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("convert to Uppercase", "success");
  };
  const handleText = event => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleText}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={settoUppercase}>
          Convert to UpperCase
        </button>
      </div>
      {/* <div>
        <h1>your text Summary</h1>
        <p>
          {text.split(" ").length} Words And {text.length} Character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
      </div> */}
    </>
  );
}
export default Textform;
