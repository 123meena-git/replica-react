/*import React from 'react'
import "./Prop.css"
import Microphone from './asset/Microphone.svg';
import Albums from './asset/Albums.svg';
import More from './asset/More.svg';

function Object(props) {
  console.log(props); 
  return (
       <div className="Chart">
        <img src={Microphone} alt="Microphone" {props.img}/>
            <p>Charts: {props.paragraph}</p>
            </div>
          );
}

function Obj() {
  return (
    <div className="Obj">
      <Object image={Microphone} paragraph="Chart" />
      <p1>Charts</p1>
      <Object image={Albums} paragraph="Albums" />
      <p2>Albums</p2>
      <Object image={More} paragraph="More" />
      <p3>More</p3>
    </div>
  )
}
export default Obj;