import React from 'react'

const Container = ({ children }) => {
  return (
    <div  id="main" className="flex min-h-screen max-w-7xl mx-auto border"> {children}</div>
  )
}

export default Container