import React, { useId, useState }from 'react'

function ProductCreate() {
const [ selectedFile, setSlectedFile ] = useState(null)

const upload = async (e) => {
    e.preventDefault()

    //Update state
    setSlectedFile(e.target.files[0])
    
    //Create an object of formData

    let formData = new FormData();

    //Add the file to formData
    formData.append('file', selectedFile)

    console.log(selectedFile)

    //Submit form-data
    try{

        const respoonse = await axios.post('http://localhost:4000/product/create', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
            })
    }catch(err){
        console.log(err)
    }
        
}

    return (
    <>
        <h3>
            aws s3 upload
        </h3>
        <form action="POST">
        <input
        type="file"
        accept="image/*"
        onChange={upload}
        />
        <input
            type="altText"
            name="altText"
            id="altText"
            value={altText}
            placeholder="altText for image"
        />
                <input
            type="productName"
            name="productName"
            id="productName"
            value={productName}
            placeholder="Enter Product Name"
        />
                <input
            type="price"
            name="price"
            id="price"
            accept='number'
            value={price}
            placeholder="Enter price (numbers only)"
        />
                <input
            type="description"
            name="description"
            id="description"
            value={description}
            placeholder="Product Description"
        />
                <input
            type="quantity"
            name="quantity"
            id="quantity"
            accept="number"
            value={quantity}
            placeholder="quantity"
        />
        {/* For this item, I want to create a drop down menu */}
        <input
            type="tag"
            name="tag"
            id="tag"
            value={tag}
            placeholder="tag"
        />

        </form>
    </>
  )
}

export default ProductCreate