import React, { useEffect, useState } from 'react'
import Noteitem from './Noteitem'
import '../CSS/Notes.css'
import { createNoteSlice } from '../store/Notes/noteslice'

function Notes({reload , setReload}) {

    const host = 'http://localhost:5000'

    const [notes, setNotes] = useState([])

    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFkYzc3Yzk4OGUzNDg5ZDA1ZDI5MzUiLCJpYXQiOjE2OTY2NzU1NDN9.tR9jWT5KwAPsQNhRKtQhJvV6iAi2iFDCelJ7z45VhC0"
            },
        });
        const json = await response.json()
        // console.log(json)
        setNotes(json.Notes)
        setReload(false)
        const noteSlice = createNoteSlice(json.Notes);
        // console.log(noteSlice)
    }

    useEffect(() => {
        getNote()
    }, [reload])


    return (
        <>
            <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <Noteitem reload={reload} setReload={setReload} note={note} setNotes={setNotes} key={note._id} />;
                })}
            </div>
        </>
    )
}

export default Notes
