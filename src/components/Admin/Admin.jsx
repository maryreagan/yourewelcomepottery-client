import React from 'react'

function Admin() {

const [isFilePicked, setIsFilePicked] = useState(false);
const [selectedFile, setSelectedFile] = useState();


    const upload = (e) => {
        setSelectedFile(e.target.files[0])
        setIsFilePicked(true)
    }

    return (
    <div>
        <h3>
            aws s3 upload
        </h3>
        <input
        type="file"
        onChange={upload}
        />
    </div>
  )
}

export default Admin