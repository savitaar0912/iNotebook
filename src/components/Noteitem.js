import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from '../store/Notes/noteslice';

export default function Noteitem({ note }) {

  const dispatch = useDispatch();

  const handleEditClick = () => {
    // Implement your edit functionality here
    // console.log(`Edit note with ID: ${note._id}`);
    dispatch(updateNote(note._id))
  };

  const handleDeleteClick = () => {
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
