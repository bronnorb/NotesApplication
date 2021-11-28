import React, { useState } from 'react';
import { Storage } from '../services/index';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { modalStyles } from '../styles/index';
import { headerStyles } from '../styles/index';

export function Header(props){

    let [modalIsOpen, setIsOpen] = useState(false);

    function onClearNotes(){
        Storage.removeItem("notes");
        setIsOpen(false);
        props.setNotes([]);

    }

    function openModal() {
        setIsOpen(true);
      }
    

    
      function closeModal() {
        setIsOpen(false);
      }
    

    return(
        <div style={headerStyles.container}>
            <Link to='/'>
                <h1>NotePad</h1>
            </Link>
            
            <button onClick={openModal}>Clear All Notes</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
            >
                <div>
                    <p>Are you sure you want to delete all notes?</p>
                    <div style={modalStyles.input}>
                        <button onClick={onClearNotes}>Yes</button>
                        <button onClick={closeModal}>No</button>
                    </div>
                    
                </div>


            </Modal>
        </div>
    );
}