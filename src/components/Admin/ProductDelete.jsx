import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'

function ProductDelete() {
    let [id, setId] = useState("")


let dlt = async (e)=> {
    try{
    e.preventDefault()
    let response = await axios.delete(`http://127.0.0.1:4000/products/delete/${id}`,
    {headers: {
        'Content-Type': 'multipart/form-data'
    },

    })
    }
    catch (err) {
        console.log(err)
            
    }
}


  return (
    <div>
        <form action="POST"
        id="form">
            <h2>Delete Product </h2>
        <TextField
            type="text"
            name="deleteProduct"
            id="deleteProduct"
            variant='outlined'
            size='small'
            label="Enter Product ID"
            placeholder='Enter Product ID'
            value={id}
            onChange={(e) => setId(e.target.value)}>
            </TextField>
            <Button variant='contained' type="submit" onClick={dlt}>Delete</Button>

           </form> 
    </div>
  )
}

export default ProductDelete
