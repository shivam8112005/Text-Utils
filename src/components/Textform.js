import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const [text, setText]=useState("enter text here");
    const[characters, setCharacters]=useState("enter text here".length);
    // text="new text";//wrong way to set text
    // setText("new Text"); correct way
    
    const handleUpClick=()=>{
        console.log("upper case was clicked")
        setText(text.toUpperCase());
        }
        const handleOnChange=(event)=>{
            console.log("on Change")
            setText(event.target.value)
            setCharacters(event.target.value.length)
            }
            const handleLowClick=()=>{
              setText(text.toLowerCase());
            }
  return (
    <>
    <div className='container'>
        <h4>{props.title} </h4>
     <div className="form-floating">
        {/* onchange is a eventlistner and whenever somethings change then it will call a function with event param */}
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label htmlFor="floatingTextarea2">Comments</label>
</div>
<button className="btn btn-primary my-2 mx-4" onClick={handleUpClick}>conver to uppercase</button>
<button className="btn btn-primary my-2" onClick={handleLowClick}>conver to lowercase</button>
    </div>
    <div className="container my-4">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {characters} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

