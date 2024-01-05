import React, { useEffect, useState } from 'react'
import Noteitem from './Noteitem'
import '../CSS/Notes.css'
import { createNoteSlice } from '../store/Notes/noteslice'
import { useNavigate } from 'react-router-dom'

function Notes({ reload, setReload }) {

    const host = 'http://localhost:5000'
    const navigate = useNavigate()

    const [notes, setNotes] = useState([])

    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json()
        // console.log(json)
        setNotes(json.Notes)
        setReload(false)
        const noteSlice = createNoteSlice(json.Notes);
        console.log(noteSlice)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNote()
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
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
