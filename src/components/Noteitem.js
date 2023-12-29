import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from '../store/Notes/noteslice';

export default function Noteitem({ note }) {

  const hostName = "http://localhost:5000"

  const dispatch = useDispatch();

  const { title, description, tag, _id } = { ...note }

  const handleEditClick = async () => {

    // API CALL 
    const response = await fetch(`${hostName}/api/notes/updatenote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFkYzc3Yzk4OGUzNDg5ZDA1ZDI5MzUiLCJpYXQiOjE2OTY2NzU1NDN9.tR9jWT5KwAPsQNhRKtQhJvV6iAi2iFDCelJ7z45VhC0"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Implement your edit functionality here
    dispatch(updateNote(note))
  };

  const handleDeleteClick = async () => {

    // API CALL 
    const response = await fetch(`${hostName}/api/notes/deletenote/${_id}`, {
      method: "DELETE",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFkYzc3Yzk4OGUzNDg5ZDA1ZDI5MzUiLCJpYXQiOjE2OTY2NzU1NDN9.tR9jWT5KwAPsQNhRKtQhJvV6iAi2iFDCelJ7z45VhC0"
      },
      body: JSON.stringify(),
    });

    // Dispatch the deleteNote action with the note ID
    dispatch(deleteNote({ _id: note._id }));
  };

  return (
    <>
      <div className="col-md-3">
        <div className="card my-2">
          <img src="images/post-it-notes-1284667_640.jpg" className="card-img-top" alt="not found" />
          <div className="card-body">
            <div className='d-flex mx-2 my-2 align-items-center'>
              <h5 className="card-title">{note.title}</h5>
              <i className="fa fa-pen mx-2" onClick={handleEditClick}></i>
              <i className="fa fa-trash mx-2" onClick={handleDeleteClick}></i>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
