import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { modalStyles, rowStyles } from '../styles/index';



export function Row(props){

    let history = useHistory();

    let [modalIsOpen, setIsOpen] = useState(false);
    let isDeleteClick = false;

    function onDeleteClick(){
        console.log('delete');
        isDeleteClick = true;
    }

    function onDeleteNoteClick(){
        props.onDeleteNote(props.index)
        closeModal();
    }

    function onRowClick(){
        if(isDeleteClick){
            openModal();
            isDeleteClick = false;
        }
        else{
            history.push(`/EditNote/${props.index}`)
        }

    }

    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return(
        <div >
            <div  key={props.index} style={rowStyles.container}  onClick={onRowClick}>
                <h1>{props.note.title}</h1>
                           
                <button onClick={onDeleteClick}>X</button>
            </div>
            
                
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
            >
                <div>
                    <p>Are you sure you want to delete note <b>{props.note.title}</b></p>
                    <div style={modalStyles.input}>
                        <button onClick={onDeleteNoteClick}>Yes</button>
                        <button onClick={closeModal}>No</button>
                    </div>
                    
                </div>
            </Modal>
        </div>
    );
}

