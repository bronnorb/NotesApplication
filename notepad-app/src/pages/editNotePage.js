import React, { useEffect, useState } from 'react';
import { Storage } from '../services/index';
import { useHistory, Link, useParams } from 'react-router-dom';
import { formStyles } from '../styles/index';

export function EditNotePage(props){

    let { noteId } = useParams();

    let history = useHistory();

    //const {id, title, content} = props.location.state;

    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    
    let [note, setNote] = useState({id: noteId, title:"", content: ""});
    let [notes, setNotes] = useState([]);

    useEffect(()=>{

        let list = Storage.getItem("notes", []);
        setNotes(list);
        let newNote = {...note};
        newNote.title = list[noteId].title;
        setTitle(newNote.title);
        newNote.content = list[noteId].content;
        setContent(newNote.content);
        setNote(newNote);

    }, []);

    function onChangeTitle(e){
        let title = e.target.value;
        setTitle(title);

    }

    function onChangeContent(e){
        let content = e.target.value;
        setContent(content);

    }
    

    function onSaveNote(){
        let newNote = {...note};
        newNote.title = title;
        newNote.content = content;
        setNote(newNote);
        let newList = [...notes];
        newList[noteId] = newNote;
        Storage.setItem("notes", newList);
        history.push('/');

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
                    <textarea style={formStyles.formContentInput} placeholder="Add Note" value={content} onChange={onChangeContent}  />
                </div>
                <div style={formStyles.formItem}>
                    <button onClick={onSaveNote}>Save Note</button>
                </div>
            </form>
            <div>
                <Link to='/' >Back to Home</Link>
            </div>
        </div>
        
    );

}