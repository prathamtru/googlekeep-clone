"use client";

import React, {useState} from 'react'
import Modal from 'react-modal';


export default function Notes({notes}) {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          transition: "all 0.3s ease-in-out"
          //backdrop: "black"
        },
      };
    let subtitle : any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div className="container">
  
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    {/* <div className="quote span-2">
    <span>John Doe</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam itaque! Consequuntur, asperiores modi!</p>
        
    </div> */}
   { notes.map((val) => {
    return(
     <div onClick={openModal} className="quote">
        <span>{val.title}</span>
        <p>{val.body}</p>
    </div>
    )
   }) }
    
</div>
  )
}
