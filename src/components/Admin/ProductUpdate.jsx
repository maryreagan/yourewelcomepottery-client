import React, { useEffect, useId, useState }from 'react'
import { TextField, Button, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup } from '@mui/material'

import axios from 'axios'
import "./ProductCreate.css"
function ProductCreate() {
const [ altText, setAltText ] = useState('')
const [ productName , setProductName ] = useState('')
const [ description, setDescription ] = useState('')
const [price, setPrice ] = useState(0)
const [ quantity, setQuantity ] = useState(0)
const [ tag, setTag ] = useState("")
let [id, setId] = useState("")
let [selectedFile, setSelectedFile] = useState(null)

let handleTagChange = (e) => {
    setTag(e.target.value)

}

const update = async (e) => {
    e.preventDefault()
    console.log(id)

    //Create an object of formData

    let formData = new FormData();

    //Add the file to formData
    
    formData.append('altText', altText)
    formData.append('productName', productName)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('quantity', quantity)
    formData.append('tag', tag)

    // Submit form-data

    try{
            const response = await axios.put(`http://127.0.0.1:4000/products/update/${id}`, 
            formData,{
            headers: {
                'Content-Type':'multipart/form-data'
            },
           
            })
    }catch(err){
        console.log(err)
    }
        
    
}

let updateImg = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append('file', selectedFile)

    try{
        let response = await axios.put(`http://127.0.0.1:4000/products/updateImg/${id}`, 
        formData,{
        headers: {
            'Content-Type':'multipart/form-data'
        },
        })
    }

    catch(err){
            console.log(err)
        }

}

    return (
    <>
    <div id = "updateContainer">
        <form action="POST" id ="formContent">
            <h2>Update Product Content </h2>
            <p>*Leave any unchanged fields empty*</p>
 
            <TextField
            type="id"
            name="id"
            id="id"
            variant='outlined'
            size='small'
            label="Product ID"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder='Product ID'
        />

        <TextField
            type="altText"
            name="altText"
            id="altText"
            variant='outlined'
            size='small'
            label="Alt Text"
            value={altText}
            onChange={e => setAltText(e.target.value)}
            placeholder='Alt Text'
        />
        <TextField
            type="productName"
            name="productName"
            id="productName"
            variant='outlined'
            size='small'
            label="Product Name"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            placeholder="Product Name"
        />
        <TextField
            type="price"
            name="price"
            id="price"
            accept='number'
            variant='outlined'
            size='small'
            label="Price (Numbers only)"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="$0"
        />
            <TextField
            type="description"
            name="description"
            id="description"
            variant='outlined'
            size='small'
            label=" Product Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Product Description'
        />
            <TextField
            type="quantity"
            name="quantity"
            id="quantity"
            accept="number"
            variant='outlined'
            size='small'
            label=" Product Quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="quantity"
        />
        {/* For this item, I want to create a drop down menu */}
        <FormControl>
         <FormLabel id="Tag">Tag</FormLabel>
         <RadioGroup>
        <FormControlLabel value="Fall"  control={<Radio />}  onChange={handleTagChange} label="Fall" />
        <FormControlLabel value="Winter" control={<Radio />} onChange={handleTagChange} label="Winter" />
        <FormControlLabel value="Spring" control={<Radio />} onChange={handleTagChange} label="Spring" />
        <FormControlLabel value="Summer" control={<Radio />}  onChange={handleTagChange} label="Summer" />
        </RadioGroup>

    </FormControl>
<Button variant='contained' type="submit" onClick={update}>Update </Button>

        </form>

        <form action="POST" id="formImage">
        <h2>Update Product Image </h2>
        <TextField
            type="id"
            name="id"
            id="id"
            variant='outlined'
            size='small'
            label="Product ID"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder='Product ID'
        />
        <input
        type="file"
        accept="image/*"
        id="file"
        onChange={e => setSelectedFile(e.target.files[0])}
        />
        <Button variant='contained' type="submit" onClick={updateImg}>Update Image </Button>

        </form>


        </div>
    </>
  )
}

export default ProductCreate