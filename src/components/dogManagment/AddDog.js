import React from 'react'
import DogForm from '../dogForm/DogForm'

const AddDog = () => {
  const isAddCalled = true

  return (
    <>
      <DogForm isAddCalled={isAddCalled} />
    </>
  )
}

export default AddDog
