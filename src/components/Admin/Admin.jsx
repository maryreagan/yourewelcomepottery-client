import React from 'react'
import ProductCreate from './ProductCreate'
import ProductUpdate from './ProductUpdate'
import ProductDelete from './ProductDelete'
import Register from './register'
function Admin() {
  return (
    <>
    <div>
        <Register />
        <ProductCreate />
        <ProductUpdate />
        <ProductDelete />
    </div>
    </>
  )
}

export default Admin