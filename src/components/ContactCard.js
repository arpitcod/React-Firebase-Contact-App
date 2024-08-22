import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";
import useShowHide from "../hooks/useShowHide";
import Model from "./Model";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {

  const {show,handleHideModel,handleShowModel,setShow,mode} = useShowHide();

  const handleDelete = async (id) =>{
    try {
        await deleteDoc(doc(db,"contacts",id))
        toast.success("contect deleted")
        // console.log("contact id",contact.id)
        console.log("id",id)

    } catch (error) {
      console.log(error)
    }
  }

 
  return (
      <div>

    <Model show={show} mode={mode} handleHideModel={handleHideModel}  contact={contact}/>
    
    <div
      className="d-flex align-items-center justify-content-between bg-warning rounded-4 px-3 mx-3"
    >
      <CgProfile className="fs-1" />
      <div className="text-center ">
        <h2 className="fw-bold fs-2 mb-0 ">{contact?.name}</h2>
        <p className="fw-semibold fs-5">{contact?.email}</p>
      </div>
      <div className="d-flex gap-3">
        <BiSolidEdit className="fs-1" onClick={()=>handleShowModel("update")} />
        <MdDelete className="fs-1 " onClick={() => handleDelete(contact?.id)}/>
      </div>
    </div>

      </div>
      
  );
};

export default ContactCard;
