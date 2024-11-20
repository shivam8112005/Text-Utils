
// // import { useState } from 'react';
// // import './App.css';
// // import About from './components/About';
// // import Navbar from './components/Navbar';
// // import Textform from './components/Textform';
// // import Textform1 from './components/Textform1';
// // import Alert from './components/Alert';

// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// //   Route,
// //   Link,
// // } from "react-router-dom";
// import React, { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Textform1 from './components/Textform1';
// import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   const [mode, setMode]=useState('light');
//   const[text, settext]=useState('dark');
//   const[alert, setAlert]=useState(null);
//   const [bg, setBg]=useState('');
//   const showAlert=(message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(()=>{setAlert(null)},2000);
//   }
//   // const toggleMode=()=>{
//   //   if(mode!=='dark'){
//   //     setMode('dark');
//   //     settext('light');
//   //     document.body.style.backgroundColor='black';
//   //     setBg('blue');
//   //     showAlert("Dark Mode has been enabled.", "success");
//   //   }else{
//   //     setMode('light');
//   //     settext('dark');
//   //     document.body.style.backgroundColor='white';
//   //     showAlert("Light Mode has been enabled.", "success");
//   //     setBg('blue');
//   //   }
//   // }
// const bgcolor=(e)=>{
// if(document.body.style.backgroundColor===e.target.innerHTML){
//   setBg('white');
//   settext('black');
//   document.body.style.backgroundColor='white';
//   console.log(1);
  

// }else{
//   setBg(e.target.innerHTML+"");
//   document.body.style.backgroundColor=e.target.innerHTML;
//   settext('white');
//   console.log(2);
  
// }
// console.log("text: ", text);
// console.log("bg: ", bg);


// }
  
// //   return (
// //     <>
// //     <Router>
// // {/* 
// // <main>
// //   <div className="input">
// //   <form className="d-flex">
// //   <input className="form-control me-2 w-25 mt-5" type="search" placeholder="Text" aria-label="Search" />
// //   <button className="btn btn-outline-success mt-5" type="submit">Enter</button>
// //   </form>
// //   </div>
// // </main> */}
// // {/* <Navbar title={9} about="About TextUtils" /> error if Navbar.propTypes is set to any other datatype */}
// // <Navbar /*mode={mode} toggleMode={toggleMode} text={text}*/ bgcolor={bgcolor} text={text}/> 
// // <Alert alert={alert}/>
// // {/* if nothing is give and we have setted Navbar.defaultProps then it will take valyue from them */}
// // <div className="container my-3">

// // {/* <Textform title="Enter text for modification" /> */}


// // <Routes>
// // <Route path="/">
// // <Textform1 text={text} bg={bg} showalert={showAlert} title="Enter Text for modification 1" mode={mode} toggleMode={toggleMode} />
// // </Route>
// //   </Routes>


// // </div>
// // <About/>
// // </Router>
// //     </>
// //   );

// return (
//   <>
//     <Router>
//       {/* Navbar Component */}
//       <Navbar mode={mode} toggleMode={toggleMode} bgcolor={bgcolor} text={text} />
      
//       {/* Alert Component */}
//       <Alert alert={alert} />
      
//       {/* Main Content */}
//       <div className="container my-3">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Textform1
//                 text={text}
//                 bg={bg}
//                 showalert={showAlert}
//                 title="Enter Text for Modification"
//                 mode={mode}
//                 toggleMode={toggleMode}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   </>
// );

// }
// export default App;



//vdo- 16
//react router dom without usind data router api
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform1 from './components/Textform1';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Theme mode: light or dark
  const [text, setText] = useState('dark'); // Text color
  const [alert, setAlert] = useState(null); // Alert messages
  const [bg, setBg] = useState(''); // Background color

  // Function to show alert messages
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  // Function to toggle theme mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = 'black';
      setBg('blue');
      showAlert('Dark mode has been enabled.', 'success');
    } else {
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled.', 'success');
      setBg('white');
    }
  };

  // Function to change background color
  const bgcolor = (e) => {
    const color = e.target.innerHTML; // Get the color from the button's text
    if (document.body.style.backgroundColor === color) {
      setBg('white');
      setText('black');
      document.body.style.backgroundColor = 'white';
    } else {
      setBg(color);
      setText('white');
      document.body.style.backgroundColor = color;
    }
    console.log('text:', text, 'bg:', bg);
  };

  return (
    <>
      {/* <Router> */}
        {/* Navbar Component */}
        <Navbar mode={mode} toggleMode={toggleMode} bgcolor={bgcolor} text={text} />
        
        {/* Alert Component */}
        <Alert alert={alert} />
        
        {/* Main Content */}
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route */}
             {/* exact path="/" */}
              {/* element={ */}
                <Textform1
                  text={text}
                  bg={bg}
                  showalert={showAlert}
                  title="Enter Text for Modification"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              {/* } */}
            {/* /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

