import React from 'react';
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props.companyName)
  return (
     <div className='parent'>
    <div className="card">
     <div>
       <div className="top">
        <img src={props.brandLogo} alt="" />
        <button>Save <Bookmark size={14}  /></button>
      </div>
      <div className="center">
        <h3>{props.companyName}<span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className='tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
     </div>
      <div className="bottom">
          <div>
            <h3>${props.pay}/hour</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
         </div>
      </div>
    </div>
  )
}

export default Card;

