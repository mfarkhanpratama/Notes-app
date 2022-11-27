import React from "react";
import ReactMarkdown from 'react-markdown'

function Sidebar({ notes , onAddNote ,onDeleteNote ,activeNote, setActiveNote}){

    const sortedNotes = notes.sort((a,b)=> b.lastModified - a.lastModified );

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note)=>(
                    <div className={`app-sidebar-note ${note.id === activeNote && 'active'}`} onClick={()=>setActiveNote(note.id) } key={note.id}>
                        <div className="sidebar-note-tittle">
                            <strong>{note.title}</strong>
                            <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
                        </div>

                        <ReactMarkdown>{note.body && note.body.substr(0,100)+ '...'}</ReactMarkdown>

                        <small>Last Modified {new Date(note.lastModified).toLocaleDateString('en-GB' , {
                            hour : '2-digit',
                            minute : "2-digit",
                        })}</small>
                    </div>
                ))}
                
            </div>
        </div>
    )

}

export default Sidebar;