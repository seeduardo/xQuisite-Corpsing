import React from 'react';

const FormErrors = ({formErrors}) =>

  <div >
    {Object.keys(formErrors).map((field, index) => {
      if(formErrors[field].length > 0){
        return (
          <p style={{color: "#f2dea3"}} key={index}>That {field} {formErrors[field]}</p>
        )
      } else {
        return '';
      }
    })}

  </div>

  export default FormErrors
