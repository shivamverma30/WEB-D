import { useState } from "react";
import CommentsForm from "./CommentsForm";
import './Comment.css';

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "@sv",
      remarks: "great job",
      rating: 4
    }
  ]);

  const addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span> <br />
            <span>rating : {comment.rating}</span><br />
            <span>{comment.username}</span><br />
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
