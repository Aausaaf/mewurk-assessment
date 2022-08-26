import React, { useEffect } from 'react'
import { useState } from 'react'
import ContactRow from '../../Components/ContactRow'
import "./Contacts.css"


const Contacts = () => {

    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [MobileNumber,setMobileNumber] = useState("")
    const [EmailID,setEmailID] = useState("")
    const [displayData, setdisplayData] = useState([])

   
     const savedata = (event) => {

        event.preventDefault()

      if(FirstName.length>50)
      {
        alert("Plaese Enter Less character in First Name")
        window.location.reload()
        return
      }

      if(LastName.length>50)
      {
        alert("Plaese Enter Less character in Last Name")
        window.location.reload()
        return
      }

      if(MobileNumber.length<10)
      {
        alert("Plaese Enter Correct Mobile Number")
        window.location.reload()
        return
      }

      if(!EmailID.includes('@')||!EmailID.includes('.')||EmailID.length<8)
      {
           alert("Please Enter Corrrect Email ID")
           window.location.reload()
           return
      }

   


        let data = {
            FirstName:FirstName,
            LastName:LastName,
            EmailID:EmailID,
            MobileNumber:MobileNumber
        }

        console.log(data)

        if(!localStorage.getItem("ContectDetails"))
        {
            localStorage.setItem("ContectDetails",JSON.stringify([data]))

            alert("Contact Details Added Successfully")

            window.location.reload()

        }
        else
        {
            let all_data =  JSON.parse(localStorage.getItem("ContectDetails"))
        all_data.push(data)
        
        localStorage.setItem("ContectDetails",JSON.stringify(all_data))

        alert("Contact Details Added Successfully")

        window.location.reload()

        }
     }


      useEffect(()=>{

        if(localStorage.getItem("ContectDetails"))
        {
            let data = JSON.parse(localStorage.getItem("ContectDetails"))

            setdisplayData(data)
        }
       
        
    
        } ,[])

        //console.log(displayData)

  return (
    <>
     <div className="Add_Section">

        <h2>
            Add Contact
        </h2>

        <form action="">

            <input type="text"
             value={FirstName}

              placeholder="Enter Your First Name"

                onChange={(event)=>{

                setFirstName(event.target.value)

            }} />

            <input type="text"
             value={LastName}
              placeholder="Enter Your Last Name" 
              onChange={(event)=>{

                setLastName(event.target.value)

            }} />
               <input type="email" 
               value={EmailID}
                placeholder="Enter Your Email ID"
                 onChange={(event)=>{

                setEmailID(event.target.value)

            }} />

               <input type="text" 
               value={MobileNumber}
                placeholder="Enter Your Mobile Number" 
                onChange={(event)=>{

                setMobileNumber(event.target.value)

            }} />
            <button onClick={(event)=>{

                   savedata(event)

            }} >Save Details</button>

        </form>

     </div>
    
    
     
     <div className="display_data_container">

        <h1>Contact Details</h1>

        <div className="details_header">

           <h3>First Name</h3>

           <h3>Last Name</h3>

           <h3>Email ID</h3>

           <h3>Mobile No</h3>

        </div>

        {
           
         displayData.map((ele)=>{

            return <ContactRow ele={ele}></ContactRow>

          })
        }

     </div>




    </>
  )
}

export default Contacts