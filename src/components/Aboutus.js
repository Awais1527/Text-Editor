import React from 'react'

export default function Aboutus(props) {
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const [mystyle, setMyStyle] = useState({
    //     color: props.mode === "dark"? "white":"black",
    //     backgroundColor: props.mode === "dark"? "white":"black",
    // });

    // const changeColor = ()=>{
    //     if(mystyle.color === "black"){
    //         setMyStyle({
    //             color: "white",
    //     backgroundColor: "black",
    //     border: "1px solid white"

    //         })
    //         setBtnText("Enable Light Mode")
    //     }else{
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }

    // }
    let mystyle = {
      color: props.mode === "dark"? "white":"black",
      backgroundColor: props.mode === "dark"? "#0d2d48":"white",
     

    }
    let mystyle2 = {
      color: props.mode === "dark"? "white":"black",
      backgroundColor: props.mode === "dark"? "#0d2d48":"white",
     
      paddingRight:0 ,paddingLeft: 0
    }
  
  return (
    <div style={ mystyle2 } className='container' >
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
      style={mystyle}
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Words & Characters
      </button>
    </h2>
    <div
    
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body"style={mystyle}>
       This website can calculate the <strong>Words & Characters</strong> in the text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        style={mystyle}
      >
        Uppercase & Lowercase
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body"style={mystyle}>
        Convert Text in <strong>Uppercase & Lowercase</strong> .
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        style={mystyle}
      >
        Text to Speech
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body"style={mystyle}>
       Convert <strong>Text into Speech</strong> 
      </div>
    </div>
  </div>
</div>
{/* <button className="my-3 btn btn-primary mx-2" onClick={changeColor} >
          {btntext}
        </button> */}

    </div>
  )
}
