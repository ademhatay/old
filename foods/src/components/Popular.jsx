import React, {useEffect} from 'react'
import axios from "axios";
const Popular = () => {

  useEffect(() => {
    getPopuler();
  }, [])
  

  const getPopuler = async () => {
    const api = await 
  }

  return (
    <div>Popular Components</div>
  )
}

export default Popular