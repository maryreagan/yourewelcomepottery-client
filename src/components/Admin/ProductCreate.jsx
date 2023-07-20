import React, { useEffect, useId, useState }from 'react'
import axios from 'axios'

function ProductCreate() {
const [ selectedFile, setSelectedFile ] = useState(null)
const [ altText, setAltText ] = useState('')
const [ productName , setProductName ] = useState('')
const [ description, setDescription ] = useState('')
const [price, setPrice ] = useState(0)
const [ quantity, setQuantity ] = useState(0)
const [ tag, setTag ] = useState("")

const upload = async (e) => {
    e.preventDefault()

    //Create an object of formData

    let formData = new FormData();

    //Add the file to formData
    formData.append('file', selectedFile)
    formData.append('altText', altText)
    formData.append('productName', productName)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('quantity', quantity)
    formData.append('tag', tag)

    // Submit form-data
    try{
            const response = await axios.post('http://127.0.0.1:4000/products/create', 
            formData,{
            headers: {
                'Content-Type':'multipart/form-data'
            },
           
            })
    }catch(err){
        console.log(err)
    }
        
    }


    return (
    <>
       
        <form action="POST">
        <input
        type="file"
        accept="image/*"
        onChange={e => setSelectedFile(e.target.files[0])}
        />
        <input
            type="altText"
            name="altText"
            id="altText"
            value={altText}
            onChange={e => setAltText(e.target.value)}
            placeholder="altText for image"
        />
                <input
            type="productName"
            name="productName"
            id="productName"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            placeholder="Enter Product Name"
        />
                <input
            type="price"
            name="price"
            id="price"
            accept='number'
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Enter price (numbers only)"
        />
                <input
            type="description"
            name="description"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Product Description"
        />
                <input
            type="quantity"
            name="quantity"
            id="quantity"
            accept="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="quantity"
        />
        {/* For this item, I want to create a drop down menu */}
        <input
            type="tag"
            name="tag"
            id="tag"
            value={tag}
            onChange={e => setTag(e.target.value)}
            placeholder="tag"
        />
        <button type="submit" onClick={upload}>Submit</button>

        </form>
    </>
  )
}

export default ProductCreate