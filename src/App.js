import React, {useState} from 'react'
import GetRandomImage from './GetRandomGifts';
import intialImage from './images/initial.webp'
import './App.css';
import {ContactUs} from './Email'
function App() {
  const [gift , setGift ] = useState(false)
  const [email , setEmail] = useState(false)
  let price =Math.floor(Math.random()*50)

  const getReloadFunc = ()=>{
    window.location.reload(true)
  }

  const sendEmail = () =>{
   setEmail(true)
  }
  return (
    <div className="App">
    <div className="innerDiv">
  
      {email ? <ContactUs/> :
       <>
         {gift ? <>
      <GetRandomImage  /> 
   <button onClick={getReloadFunc}>Reload </button>
    </>: 
     <>
  <img src={intialImage}  style={{width:'50%'}}/>
  <h1>Secret case or money</h1>
   <h1>{price + '$'}</h1>
    <button onClick={()=>setGift(true)}>Gift</button>
   <button onClick={sendEmail}>Take money</button>

     </>
    }
       </>
      
      }

    </div>
    </div>
  );
}

export default App;
