import {useState, useEffect}from 'react'
import { TextField, Button} from '@mui/material'
import Modal from "@mui/material/Modal";
import UpdateModal from './UpdateModal';
import "./LineCreate.css"
function LineCreate() {
    const [lineName, setLineName] = useState("")
    const [lines, setLines] = useState([])
    const [id, setId] = useState("")
    const [modal, setModal] = useState(false)
    const [refresh] = useState(false)
    const [deletion, setDelete] = useState(false)
    let upload = async (e) => {
        e.preventDefault()
        let url = "http://localhost:4000/line/"
        let body = {name: lineName}
        try {
            let response = await fetch(url, {
                method: "POST",
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


    useEffect(() => {
        let url = "http://localhost:4000/line/"
        let response = fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
        .then((res) => res.json())
        .then((data) => {
            setLines(data.lines)
        }
        )
    }, [refresh])
    let handleCloseModal = () => {
        setModal(false);
    };
    useEffect(() => {
        try{
            let url = `http://localhost:4000/line/${id}`
            let response = fetch(url, {
                method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                })
            })
            .then((res) => res.json())
            .then((data) => {
                setDelete(false)
            }
            )
        } catch(err){
            if(err){
                window.alert(err)
            }
        }
    }, [deletion])

    return (
        <div className='lineContainer'>
            <form action="POST" id="form">
                <h2>Upload Line</h2>
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
                className='form-input'
                >

                </TextField>
                <Button variant="contained" type="submit" onClick={upload}>
                Submit
                </Button>
            </form>
            {
                lines ? lines.map((line, key) => {
                    return (
                        <div className='item-container' key={key}>
                            <h3>{line.name}</h3>
                            <div>
                            <Button variant="contained" onClick={() => {setId(line._id), setModal(true)}}>Update Name</Button>
                            <Button variant="contained" onClick={() => {setId(line._id), setDelete(true)}}>Delete</Button>
                            </div>
                        </div>
                    )
                }) : null
            }
            {
                modal ? 
                <Modal className="modal" open={modal} onClose={handleCloseModal}>
                    <UpdateModal id={id} />
                </Modal>
                    : null}
        </div>
    )
}

export default LineCreate