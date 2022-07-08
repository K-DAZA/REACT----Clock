import React from 'react'

export default function TimeCount() {
    
    const date = new Date().toLocaleDateString();
  
    return (
    <div className="text-center">
        <h1 className="text-white text-center">Date Count</h1>
        <h1 className="text-center mt-5 bg-white p-5 m-auto rounded" style={{width: 400}}>{date}</h1>
    </div>
  )
}
