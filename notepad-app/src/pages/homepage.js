import React, { useState, useEffect } from 'react';
import { Row } from '../components/index';
import { Storage } from '../services/index';
import { Link } from 'react-router-dom';
import { homepageStyles } from '../styles/homepageStyles';

export function HomePage({ notes, setNotes}){

    useEffect(()=>{
        setNotes(Storage.getItem("notes", []));
    }, []);

    function onDeleteNote(id){
        let newList = [...notes];
        newList.splice(id, 1);
        setNotes(newList);
        Storage.setItem("notes", newList);
    }

    function renderRows(){
        return notes.map((n, index) => 
            <Row index={index} note={n} notes={notes} onDeleteNote={onDeleteNote} />
        )
    }

    return(
        <div style={homepageStyles.container}>
            <h1>Notes</h1>
            <div>
                {renderRows()}
            </div>
            <div>
                <Link to='/AddNote'>
                    <button>
                        Add New Note
                    </button>

                </Link>
            </div>
            
        </div>
    );
}



