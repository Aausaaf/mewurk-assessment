import React from 'react'

const ContactRow = (props) => {
  return (
    <div key={props.ele.MobileNumber} className='row'>

    <p> {props.ele.FirstName}</p>

    <p>{props.ele.LastName}</p>

    <p>{props.ele.EmailID}</p>

    <p>{props.ele.MobileNumber}</p>
    
 </div>
  )
}

export default ContactRow