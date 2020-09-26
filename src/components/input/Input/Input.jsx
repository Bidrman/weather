import React from 'react'
import { Input as InputR } from 'reactstrap'

const Input = ({ name, id, placeholder, labelName, type, ...props }) => {
  return (
    <div>
      {labelName ? (
        <label key={id} for={id}>
          {labelName}
        </label>
      ) : null}
      <InputR
        name={name}
        key={id}
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Input
