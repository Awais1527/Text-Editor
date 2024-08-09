import React, { useState } from "react";
import './TextForm.css';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpFun = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success')
  };

  const handleLoFun = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success')
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
     document.getSelection().removeAllRanges() 
    props.showAlert('Text Copied','success')
    
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleared','success')
  };
  

  const button = {
   outline: 'none', boxShadow: 'none',
    
    color: "white",
    backgroundColor: props.mode === "dark"? "rgb(71 105 133)":"#838583",
     
    border: "0"}
  return (
    <div style={{color: props.mode === "dark"? "white":"black"}}>
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
       
          className="form-control custom-textarea "
          id="mybox"
          value={text}
          onChange={handleOnChange}
          rows={10}
          placeholder="Enter Text Here"
          style={{backgroundColor: props.mode === "dark"? "#0d2d48":"white", color: props.mode === "dark"? "white":"black"}}
        />

        <button className="my-3 btn btn-primary mx-2 " onClick={handleUpFun} style={button } disabled={text.length === 0}  >
          Uppercase
        </button>
        <button className="my-3 btn btn-primary mx-2" onClick={handleLoFun} style={button} disabled={text.length === 0}>
          Lowercase
        </button>
        <button className="my-3 btn btn-primary mx-2" onClick={handleCopy} style={button} disabled={text.length === 0}>
          Copy to Clipboard
        </button>
        <button className="my-3 btn btn-primary mx-2" onClick={handleClear} style={button} disabled={text.length === 0}>
          Clear
        </button>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters
        </p>
        
        <h2>Preview</h2>
        <p>{ text.length >0 ? text:"Enter Text to Preview"}</p>
      </div>
    </div>
  );
}
