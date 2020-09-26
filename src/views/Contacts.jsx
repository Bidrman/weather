import React from 'react'
import Form from '../features/Form'

const Contacts = ({ setCoords }) => {
  return (
    <div>
      <h1>Kontakty</h1>
      <p>
        Vyplňte prosím kontaktní formulář. Nebojte se, budeme vas kontaktovat
      </p>
      <Form />
    </div>
  )
}

export default Contacts
