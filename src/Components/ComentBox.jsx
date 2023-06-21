import React, { useState } from 'react'

const ComentBox = () => {

  const comment = {
    width:"40%",
    height:"100px",
    padding:"10px",
    backgroundColor:"#d1e2bd",


  }

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment('');
    }

  }
  return (
    <div>
      <h2>Comment Box</h2>

      <form onSubmit={handleSubmit}>

        <textarea type="text"
        style={comment}
          placeholder='Add a comment ....'
          onChange={handleCommentChange}
          value={newComment}
        />

        <button type='submit'>Submit</button>

        <ul>
          {
            comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))
            
           
          }
        </ul>
      </form>
    </div>
  )
}

export default ComentBox