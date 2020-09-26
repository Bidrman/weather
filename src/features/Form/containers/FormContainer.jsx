import React from 'react'
import Form from '../components/Form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const showSentData = async values => {
  await sleep(500)
  window.alert('Poslana data jsou: ' + JSON.stringify(values))
}
const FormContainer = () => {
  return <Form showData={showSentData} />
}

export default FormContainer
