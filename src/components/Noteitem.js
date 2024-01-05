import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from '../store/Notes/noteslice';

export default function Noteitem({ reload, setReload, note }) {

  const hostName = "http://localhost:5000"

  const dispatch = useDispatch();

  const handleDeleteClick = async () => {

    // API CALL 
    const response = await fetch(`${hostName}/api/notes/deletenote/${note._id}`, {
      method: "DELETE",
      headers: {
        "auth-token": localStorage.getItem('token')
      },
    });

    console.log(response)

    // Dispatch the deleteNote action with the note ID
    dispatch(deleteNote({ _id: note._id }));
    setReload(true)
  };

  // Initialize formData state with note values
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  // Update formData when note prop changes
  useEffect(() => {
    setFormData({
      title: note.title,
      description: note.description,
    });
  }, [note]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log('formData')
  };

  const updateChange = async (e) => {

    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Updated", { _id: note._id, formData });
    setReload(true)

    // API CALL 
    const response = await fetch(`${hostName}/api/notes/updatenote/${note._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Update successful")
      // Update Redux store with the new data
      dispatch(updateNote({ _id: note._id, formData }));
    } else {
      console.error("Failed to update note");
    }
  }

  return (
    <>
      <div className="col-md-3">
        <div className="card my-2">
          <img src="images/post-it-notes-1284667_640.jpg" className="card-img-top" alt="not found" />
          <div className="card-body">
            <div className='d-flex mx-2 my-2 align-items-center'>
              <h5 className="card-title">{note.title}</h5>
              <i className="fa fa-pen mx-2" data-bs-toggle="modal" data-bs-target={`#exampleModal-${note._id}`}></i>
              <i className="fa fa-trash mx-2" onClick={handleDeleteClick}></i>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>

      <div className={`modal fade`} id={`exampleModal-${note._id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${note._id}`} aria-hidden={true}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body">
              <div className="form-group my-3">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button onClick={updateChange} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
