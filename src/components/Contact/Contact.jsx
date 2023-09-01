
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import "./Contact.css"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    let contactUs = async () => {
        try {
            await axios.post(
                `http://127.0.0.1:4000/form/contactUs`,
                { name, email, message },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className = "contact-container" >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2em",
                }}
                mt={0}
            >
                <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
                    <Typography
                        variant="h4"
                        align="center"
                        mb={2}
                        mt={0}
                        color="primary"
                        fontFamily="Salsa-Regular"
                    >
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => {
                                contactUs(), console.log(name, email, message);
                            }}
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </div>
    );
}

export default Contact;
