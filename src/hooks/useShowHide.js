import React, { useState } from 'react'

const useShowHide = () => {

    const [show,setShow] = useState(false);
    const [mode,setMode] = useState("add");
    const handleShowModel = (mode = "add") =>{
      setMode(mode)
      setShow(true)
    } 
    const handleHideModel = () => setShow(false);
  return {show,setShow,handleHideModel,handleShowModel,mode}
}

export default useShowHide