import React from 'react'

export default function AddNote() {
  return (
    
<div className='AddNoteContainer'>
     <div className="AddNewNoteContainer">
        <input style={{width:"100%"}} type="text" placeholder='Take a note...'></input>
        <div><textarea style={{width:"100%"}} placeholder="Take a note..."></textarea></div>
        {/* <textarea placeholder="Take a note..."></textarea> */}
     </div>
     </div>
    
  )
}
