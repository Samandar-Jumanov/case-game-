import React from 'react'
import './App.css'
import gift1 from './images/1.jpg'
import gift2 from './images/2.png'
import gift3 from './images/3.jpg'
import gift4 from './images/4.png'
import gift5 from './images/5.jpg'
import gift6 from './images/6.png'

  const GetRandomImage = () =>{
    let Images =[{id:1 ,  url:gift1}, {id:2,  url:gift2 }, 
    {id:3, url:gift3},{id:4, url:gift4},{id:5, url:gift5},{id:6, url:gift6}]
        
let randomImageId = Math.floor(Math.random() * Images.length +1 )
const GetRandomGift= ()=>{
if(randomImageId === 1){
return (<>
<img src={gift1} alt='' />
  <h1>Alram clock</h1>
</>)
} else if (randomImageId ===2){
  return  (
    <>
     <img src={gift2} alt='' />
    <h1>Empty box (Oppppps! )</h1>
    </>
  )
} else if (randomImageId ===3){
  return(<>
   <img src={gift3} alt='' />
   <h1>Pistol</h1>
  </>)
} else  if(randomImageId ===4){
  return (<>
   <img src={gift4} alt='' />
   <h1>5$  (not bad )</h1>
  </>
  )
}else  if(randomImageId ===5){
  return  (<>
  <img src={gift5} alt='' />
  <h1>30$(cool)</h1>
  </>)
}else  if(randomImageId ===6){
  return  (<>
  <img src={gift6} alt='' />
    <h1>i want  steak</h1>
  </>)
}else  if(randomImageId>6|| randomImageId===0){
  return  (
    <>
     <img src={gift2} alt='' />
    <h1>Empty box (Oppppps! )</h1>
    </>
  )
}
}

return(
    <div className='innerDiv'>
        <GetRandomGift/>
</div>
)
  }
export default GetRandomImage