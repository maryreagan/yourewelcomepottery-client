import {useState, useEffect}from 'react'
import { TextField, Button} from '@mui/material'
import Modal from "@mui/material/Modal";
import "./UpdateModal.css"
function UpdateModal({id}) {
    const [lineName, setLineName] = useState("")

    let update = async (e) => {
        e.preventDefault()
        let url = `http://localhost:4000/line/${id}`
        let body = {name: lineName}
        try {
            let response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                })
            })
            await response.json()
            setLineName("")
        }
        catch (err) {
            if(err){
                window.alert(err)
            }
        }
    }
    return (
        <div className='modal'>
            <form action="PUT" className='modal-form'>
                <h1>Update Line Name</h1>
                <TextField
                type="text"
                name="lineName"
                id="lineName"
                variant='outlined'
                size='small'
                label="Line Name"
                placeholder="Line Name"
                value={lineName}
                onChange={(e) => setLineName(e.target.value)}
                className='inner-modal'
                />
                    <Button
                    variant='contained'
                    type="submit"
                    className='inner-modal'
                    onClick={(e) => {update(e)}}
                    >
                        Submit
                    </Button>
            </form>
        </div>
    )
}

export default UpdateModal