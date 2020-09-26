import React from 'react'
import { Input } from 'reactstrap'
import styles from './styles.scss'

const Checkbox = ({ name, id, value, checked, labelName }) => {
  return (
    <div className="checkbox">
      <Input
        type="checkbox"
        className="reacts-check"
        name={name}
        checked={checked}
        id={id}
        value={value}
      />
      {labelName ? <label for={id}>{labelName}</label> : null}
    </div>
  )
}

export default Checkbox
