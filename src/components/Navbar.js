import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(a) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${a.bg} text-${a.text}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{a.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{a.about}</a>
          </li>
        </ul>
        <button type="button" className="btn btn-danger mx-2" style={{backgroundColor: "red"}} onClick={a.bgcolor}>red</button>
        <button type="button" className="btn mx-2" style={{backgroundColor: "brown"}} onClick={a.bgcolor}>brown</button>
        <button type="button" className="btn mx-2" style={{backgroundColor: "blue"}} onClick={a.bgcolor}>blue</button>
        <button type="button" className="btn mx-2" style={{backgroundColor: "green"}} onClick={a.bgcolor}>green</button>
        <button type="button" className="btn mx-2" style={{backgroundColor: "black",color:"white"}} onClick={a.bgcolor}>black</button>
        <div className="form-check form-switch mx-4">
       
 {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={a.toggleMode} />  */}
  
  {/* <label className={`form-check-label text-${a.text}`} for="flexSwitchCheckDefault">DarkMode</label> */}
</div>
      </div>
   
    </div>
  </nav>
  );
}

// it is like testing that props passed from App.js are of expected datatype if they are not it will show error on console

Navbar.propTypes={
    // title: PropTypes.string.isRequired, if we marked any props is required and we dont pass them from app.js and not set 
    // defaultProps for them then it will show error
    //mostly we use isRequired
    title: PropTypes.string,
    about: PropTypes.string
}
//if we donot pass anything in app.js then it will take from defaultprops
Navbar.defaultProps={
    title: "default title",
    about: "default about"
}