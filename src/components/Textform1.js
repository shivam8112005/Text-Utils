import React, { useState } from 'react'

export default function Textform1(props) {
    const [text, setText]=useState('');
    const [button, setButton]=useState('');
    const [ans, setAns]=useState('');
    const handleOnChange=(event)=>{
       
        setText(event.target.value);
        
    }
    const handleUpClick= (e)=>{
        setButton(e.target.innerHTML);
        setText(text.toUpperCase());
        setAns(text.toUpperCase());
        props.showalert("convert to uppercase.", "success");
    }
    const handleLowClick=(e)=>{
        setButton(e.target.innerHTML);
        setText(text.toLowerCase());
          setAns(text.toLowerCase());
          props.showalert("convert to lowercase.", "success");
    }
    const handleEmail=(e)=>{
        setButton(e.target.innerHTML);
        let s=text.indexOf('@');
        setText(text.substring(s));
        setAns(text.substring(s));
        props.showalert("found email.", "success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
    }
  return (
   <>
   <div className="textform" style={{position:'absolute', top:'25%'}}>
   <h3 className={`text-${props.text}`}>{props.title}</h3>
   <div className="form-floating">
        {/* onchange is a eventlistner and whenever somethings change then it will call a function with event param */}
  <textarea className={`form-control bg-${props.bg} text-dark`} value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label htmlFor="floatingTextarea2">Comments</label>
</div>
<div className="container my-4">
<button className="btn btn-primary my-2 mx-4" style={{backgroundColor:props.bg, color:props.text}} onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary my-2" onClick={handleLowClick} style={{backgroundColor:props.bg, color:props.text}}>convert to lowercase</button>
<button className="btn btn-primary my-2 mx-4" onClick={handleEmail} style={{backgroundColor:props.bg, color:props.text}}>Extract email handle</button>
<button className="btn btn-primary my-2 mx-4" onClick={handleCopy} style={{backgroundColor:props.bg, color:props.text}}>copy</button>

<h4 className={`text-${props.text}`}> {button}: {ans}</h4>
    </div>
    </div>
   </>
  )
}
