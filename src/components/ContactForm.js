import React, { useEffect, useState } from "react";
import {db} from '../config/firebase'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const ContactForm = ({isUpdate,initialData,handleHideModel}) => {
const [formData,setFormData] = useState({
    name:"",
    email:""
})

// get single data conditionally
useEffect(()=>{
  if (isUpdate && initialData) {
      setFormData({
        name:initialData.name || "",
        email:initialData.email ||""
      })
  }
},[isUpdate,initialData])

// const addContact = async (contact) =>{
//     try {
//         const contactRef = collection(db ,"contacts");
//         await addDoc(contactRef,contact);
//     } catch (error) {
//         console.log(error)
//     }
// }

const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData((prev) =>({
        ...prev,
        [name] : value
    }))
}

    const handleSubmit = async (e) =>{
        e.preventDefault();
    try {
            
      if (isUpdate && initialData) {
          const contactRef = doc(db,"contacts",initialData?.id)
          await updateDoc(contactRef,formData)
          handleHideModel();
          toast.success("contect updated")
          console.log("updated contacts",formData)
      } else {
          const contactRef = collection(db,"contacts");
          await addDoc(contactRef,formData)
          handleHideModel();
          toast.success("contect Added")
          console.log("conactRef",contactRef)
          console.log("formdata",formData)
        
      }

        setFormData({
            name:"",
            email:""
        })

     

    } catch (error) {
        console.log("error in adding contacts",error)
    }

    //    addContact()
    
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <div className="form-floating mb-0">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={formData?.name}
              onChange={handleChange}
               name="name"
               required
            />
            <label htmlFor="floatingPassword">Name</label>
          </div>

          <div className="form-floating">
         
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData?.email}
               name="email"
               required
            />
            <label htmlFor="floatingInput">Email </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {isUpdate ? "Update" :"Add"} Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
