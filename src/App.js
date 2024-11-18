
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Textform1 from './components/Textform1';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState('light');
  const[text, settext]=useState('dark');
  const[alert, setAlert]=useState(null);
  const [bg, setBg]=useState('');
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{setAlert(null)},2000);
  }
  // const toggleMode=()=>{
  //   if(mode!=='dark'){
  //     setMode('dark');
  //     settext('light');
  //     document.body.style.backgroundColor='black';
  //     setBg('blue');
  //     showAlert("Dark Mode has been enabled.", "success");
  //   }else{
  //     setMode('light');
  //     settext('dark');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light Mode has been enabled.", "success");
  //     setBg('blue');
  //   }
  // }
const bgcolor=(e)=>{
if(document.body.style.backgroundColor===e.target.innerHTML){
  setBg('white');
  settext('black');
  document.body.style.backgroundColor='white';
  console.log(1);
  

}else{
  setBg(e.target.innerHTML+"");
  document.body.style.backgroundColor=e.target.innerHTML;
  settext('white');
  console.log(2);
  
}
console.log("text: ", text);
console.log("bg: ", bg);


}
  
  return (
    <>
{/* 
<main>
  <div className="input">
  <form className="d-flex">
  <input className="form-control me-2 w-25 mt-5" type="search" placeholder="Text" aria-label="Search" />
  <button className="btn btn-outline-success mt-5" type="submit">Enter</button>
  </form>
  </div>
</main> */}
{/* <Navbar title={9} about="About TextUtils" /> error if Navbar.propTypes is set to any other datatype */}
<Navbar /*mode={mode} toggleMode={toggleMode} text={text}*/ bgcolor={bgcolor} text={text}/> 
<Alert alert={alert}/>
{/* if nothing is give and we have setted Navbar.defaultProps then it will take valyue from them */}
<div className="container my-3">

{/* <Textform title="Enter text for modification" /> */}
<Textform1 text={text} bg={bg} showalert={showAlert} title="Enter Text for modification 1" /*mode={mode} toggleMode={toggleMode} text={text}*//>
</div>
<About/>
    </>
  );
}

export default App;
