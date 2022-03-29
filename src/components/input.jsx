import React, { Component } from 'react';

const Input = ({name ,value , lable , onChange}) => {
    return (
        <div className="mb3">
        <label htmlFor="email">{lable} :</label>
        <input /* ref={this.email} */
         onChange={onChange} 
         value={value}
          name={name}
          id={name} 
          className='form-control' type="text" />
     </div>
      );
}
 
export default Input;