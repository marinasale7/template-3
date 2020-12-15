import React from 'react';


const Form = (propse) =>
{
      
   return (
       <div>
           <form onSubmit={propse.addcourse}>
               <input  value={propse.current} type="text" placeholder="enter course" onChange={propse.Updatecourse}   />
               <button type="submit">Add Course</button>
           </form>
       </div>
   )
} 

export default Form;