import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
   const errors = {};
   if (!values.userName) {
     errors.username = 'Username cannot be empty ';
   }
 
   return errors;
 };

export default function CommentsForm({ addNewComment }) {
//   const [formData, setFormData] = useState({
//     username: "",
//     remarks: "",
//     rating: 5
//   });

const formik = useFormik({
    initialValues: {
        username: "",
        remarks: "",
        rating: 5
    },
    validate,
    onSubmit: values =>{
        alert(JSON.stringify(values,null,2));
    },
});


  let [isValid ,setIsValid ]= useState(true);

//   const handleInputChange = (event) => {
//     setFormData((currData) => ({
//       ...currData,
//       [event.target.name]: event.target.value
//     }));
//   };

//   const handleSubmit = (event) => {
//     if(!formData.username){            // scratch validation {formik use pakage} 
//         console.log("username is null");
//         setIsValid(false);
//         event.preventDefault();
//         return;
//     }
    
//     console.log(formData);
//     addNewComment(formData);
//     setFormData({
//       username: "",
//       remarks: "",
//       rating: 5
//     });
//   };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <p style={{color :"red"}}>{formik.errors.username}</p> : null}

        {!isValid && <p style={{color :"red"}}>username cannot be empty </p>}
        <br /><br />

        <label htmlFor="remarks">Remarks: </label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="give some remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        ></textarea>
        <br /><br />

        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br /><br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
