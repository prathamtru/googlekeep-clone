"us client"
import React, {useState, useTransition} from 'react'


export default function AddNote({addNotes}) {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isPending, startTransition] = useTransition();

  return (
    
<div className='AddNoteContainer'>
     <div className="AddNewNoteContainer">
     <form
      className="w-full flex mb-10"
      onSubmit={(e) => {
        e.preventDefault();

        if (title.trim().length === 0) {
          return;
        }

        startTransition(() => {
          addNotes(title);
        });

        setTitle("");
      }}
    >
        <input onChange={(e) => setTitle(e.target.value)} style={{width:"100%"}} type="text" placeholder='Take a note...'></input>
        <div><textarea onChange={(e) => setBody(e.target.value)} style={{width:"100%"}} placeholder="Take a note..."></textarea></div>
   
        {/* <textarea placeholder="Take a note..."></textarea> */}
     <button 
     type="submit">
     Add</button>
     </form>
     </div>
     </div>
    
  )
}
