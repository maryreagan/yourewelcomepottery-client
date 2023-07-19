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
            type=""
            name=""
            id=""
            value={}
            placeholder=""
        />
                <input
            type=""
            name=""
            id=""
            value={}
            placeholder=""
        />
                <input
            type=""
            name=""
            id=""
            value={}
            placeholder=""
        />
                <input
            type=""
            name=""
            id=""
            value={}
            placeholder=""
        />
                <input
            type=""
            name=""
            id=""
            value={}
            placeholder=""
        />
                <input
            type=""
            name=""
            id=""
            value={}
            placeholder=""
        />

        </form>
    </>
  )
}

export default ProductCreate