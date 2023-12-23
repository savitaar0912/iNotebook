import React from 'react'
import { useSelector } from 'react-redux'
import { selectNote } from '../store/Notes/noteslice'
import Noteitem from './Noteitem'
import '../CSS/Notes.css'

function Notes() {

    const notes = useSelector(selectNote)

    return (
        <>
            <div className='row my-3'>
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <Noteitem note={note} key={note._id} />
                })}
            </div>
        </>
    )
}

export default Notes
