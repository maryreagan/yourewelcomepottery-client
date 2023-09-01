import {useState} from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'
import "./ProductCreate.css"

function Register() {
let [email, setEmail] = useState('')
let [password, setPassword] = useState('')
let registerUser = async (e) => {
    e.preventDefault()
    let body = {email , password}

    try{
    await axios.post('https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/admin/register',
    body,{
        headers: {
            'Content-Type':'application/json'
        },
       
        })

    window.alert("User Created Successfully")
}
catch(err){
    window.alert(err.response.data.message)
}
}
  return (
    <>
       <form action="POST" id="register">
        <h2>Register New Admin </h2>
        <TextField
            type="email"
            name="Email"
            id="email"
            variant='outlined'
            size='small'
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
        />
        <TextField
            type="password"
            name="password"
            id="password"
            variant='outlined'
            size='small'
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
        />
    <Button id ="sendEmail" variant='contained' type="submit" onClick={registerUser}>Register</Button>

        </form>
         </>
  )
}

export default Register