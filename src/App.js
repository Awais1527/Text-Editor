
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState}from 'react'


function App() {

const [alertMsg, setAlertMsg]=useState(null);

const showAlert=(message,type)=>{
setAlertMsg({
  msg : message,
  type:type
})
setTimeout(() => {
  setAlertMsg(null)
}, 1500);

}











  const [mode, setMode] = useState("light");
  const changeMode= ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= "#04415c";
    showAlert('Dark Mode is enabled','success')
  }else{
    setMode('light');
    document.body.style.backgroundColor= "white";
    showAlert('Light Mode is enabled','success')
  }
}
  return (
    <>
   
   
 


   <BrowserRouter>
   <Navbar title="Home" home="About" mode={mode} changeMode= {changeMode} />
   <Alert alert={alertMsg}/>
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />}/>
        <Route exact path="/aboutus" element={<Aboutus  mode={mode} />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
