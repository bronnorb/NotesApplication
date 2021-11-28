import React, { useState, useEffect } from 'react';
import { Storage, SessionStorage } from '../services/index';
import { useHistory, Link } from 'react-router-dom';
import { formStyles } from '../styles/index';

export function AddNotePage(){

    let history = useHistory();

    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    let [note, setNote] = useState({id: "", title:"", content: ""});
    let [notes, setNotes] = useState([]);

    useEffect(() =>{
        setTitle(SessionStorage.getSessionItem('title', ""));
        setContent(SessionStorage.getSessionItem('content', ""));
        setNotes(Storage.getItem('notes', []))
    }, []);

    function onChangeTitle(e){
        let newTitle = e.target.value;
        setTitle(newTitle);
        SessionStorage.setSessionItem('title', newTitle);
    }

    function onChangeContent(e){
        let newContent = e.target.value;
        setContent(newContent);
        SessionStorage.setSessionItem('content', newContent);
    }

    function onSubmitNote(){
        if(title && content){
            let newNote = {...note};
            newNote.id = notes.length + 1;
            newNote.title = title;
            newNote.content = content;
            setNote(newNote);
            let newNotes = [...notes, newNote];
            setNotes(newNotes);
            Storage.setItem('notes', newNotes);
            SessionStorage.removeSessionItem("title");
            SessionStorage.removeSessionItem("content");
            history.push('/');
        }

    }

    return(
        
        <div style={formStyles.container}>
            
            <form style={formStyles.formContainer}>
                <div style={formStyles.formItem}>
                    <label style={formStyles.formLabel}>Title</label>
                    <input style={formStyles.formInput} placeholder="Add Title" value={title} onChange={onChangeTitle} />
                </div>
                <div style={formStyles.formItem}>
                    <label>Content</label>
                    <textarea style={formStyles.formContentInput}  placeholder="Add Note" value={content} onChange={onChangeContent} />
                </div>
                <div style={formStyles.formItem}>
                    <button onClick={onSubmitNote} >Add Note</button>  
                </div>           
        </form>
        <div>
            <Link to='/' >Back to Home</Link>
        </div>

        </div>
        
        
    );
}

