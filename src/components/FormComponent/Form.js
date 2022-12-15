import './Form.css'
import React from 'react';
import { useState } from 'react';
const Form = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   
    return (
        <div className="form">
            <form>
                <label>
                Name:
                </label>
               <input
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               /> 
                <label>
                Email:
                </label>
               <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
                <label>
                Password:
                </label>
               <button className="btn">Join Now</button> 
               <p>{ title }</p>
               <p>{ body }</p>
              
            </form>
        </div>
    );
}
export default Form;