import { useState, useEffect } from "react";
import { TextField, InputAdornment, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Modal from "@mui/material/Modal";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
let allFiles = [];
function ProductCardUpdate() {
    let [products, setProducts] = useState([]);
    const [altText, setAltText] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [tag, setTag] = useState("");
    let [idContent, setIdContent] = useState("");
    let [updateContent, setUpdateContent] = useState(false);
    let [updateImage, setUpdateImage] = useState(false);
    let [deleteProduct, setDeleteProduct] = useState(false);
    let [refresh, setRefresh] = useState(false);
    const [isModalOpen, setModalOpen] = useState(true);
    const [multipleImgs, setMultiple] = useState(null)
    const [lines, setLines] = useState([])
    const [lineName, setLineName] = useState("")

const handleImageChange = (e) => {
  console.log(allFiles)
  const {files} = e.target
  allFiles.push(files[0])
  // if(name == 'multipleImgs'){
  //   for(let i = 0; i < files.length; i++){
  //     console.log(files[i])
  //     allFiles.push(files[i])
  //   }
  //   setMultiple(allFiles)
  // }
  console.log(allFiles)
  setMultiple(allFiles)
  console.log(allFiles)
  console.log(multipleImgs)
}

const handleRemoveImages = () => {
  setMultiple({
    multipleImgs: null
  })
  document.getElementById("multiple-images-input").value = ""
}

    let fetchData = async () => {
        fetch("https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/products/all", {
            method: "GET",
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

    useEffect(() => {
        let fetchDataUpdate = async () => {
            await fetchData();
        };
        fetchDataUpdate();
    }, [refresh]);

    const update = async (e) => {
        e.preventDefault();

        //Create an object of formData

        let formData = new FormData();

        //Add the file to formData

        formData.append("altText", altText);
        formData.append("productName", productName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("tag", tag);
        formData.append("line", lineName);

        // Submit form-data

        try {
            await axios.put(
                `https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/products/update/${idContent}`,
                formData,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data"
                    },
                }
            );
            setRefresh(!refresh);
            handleCloseModel();
            setAltText("");
            setProductName("");
            setDescription("");
            setPrice("");
            setQuantity("");
            setTag("");
        } catch (err) {
            console.log(err);

            // if (err.response.data.message.includes("Cast")) {
            //     window.alert("One or more of your inputs is invalid");
            // }
        }
    };
    useEffect(() => {
        getLines()
    }, [refresh])
    let getLines = () => {
        fetch(`https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/line/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setLines(data.lines)
        }
        )

    }
    let updateImg = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        if(multipleImgs){
            for (let i = 0; i < multipleImgs.length; i++) {
                formData.append('multipleImgs', multipleImgs[i]);
                console.log(multipleImgs[i])
            }
        }

        try {
            await axios.put(
                `https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/products/updateImg/${idContent}`,
                formData,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setRefresh(!refresh);
            handleCloseModel();
        } catch (err) {
            console.log(err);
        }
    };

    let deleteProd = async (e) => {
        try {
            e.preventDefault();
            await axios.delete(
                `https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/products/delete/${idContent}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setRefresh(!refresh);
            handleCloseModel();
        } catch (err) {
            console.log(err);
        }
    };


    let handleUpdateContent = (id) => {
        setIdContent(id);
        setUpdateContent(true);
        setUpdateImage(false);
        setDeleteProduct(false);
    };

    let handleUpdateImage = (id) => {
        setIdContent(id);
        setUpdateImage(true);
        setUpdateContent(false);
        setDeleteProduct(false);
    };

    let handleDeleteProduct = (id) => {
        setIdContent(id);
        setDeleteProduct(true);
        setUpdateContent(false);
        setUpdateImage(false);
    };

    let handleOpenModel = () => {
        setModalOpen(true);
    };

    let handleCloseModel = () => {
        setModalOpen(false);
    };

    return (
        <>
            <h2>Update Content</h2>
            {updateContent ? (
                <Modal className="modal" open={isModalOpen} onClose={handleCloseModel}>
                    <form action="POST" id="formContent">
                        <h2>Update Product Content </h2>
                        <p>*Leave any unchanged fields empty*</p>

                        <TextField
                            type="altText"
                            name="altText"
                            id="altText"
                            variant="outlined"
                            size="small"
                            label="Alt Text"
                            value={altText}
                            onChange={(e) => setAltText(e.target.value)}
                            placeholder="Alt Text"
                        />
                        <TextField
                            type="productName"
                            name="productName"
                            id="productName"
                            variant="outlined"
                            size="small"
                            label="Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Product Name"
                        />
                        <TextField
                            type="price"
                            name="price"
                            id="price"
                            accept="number"
                            variant="outlined"
                            size="small"
                            label="Price (Numbers only)"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="$0"
                        />
                        <TextField
                            type="description"
                            name="description"
                            id="description"
                            variant="outlined"
                            size="small"
                            label=" Product Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Product Description"
                        />
                        <TextField
                            type="quantity"
                            name="quantity"
                            id="quantity"
                            accept="number"
                            variant="outlined"
                            size="small"
                            label="Quantity (Numbers only)"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="quantity"
                        />
                        {/* For this item, I want to create a drop down menu */}
                        <FormControl>
                            <FormLabel id="Tag">Tag</FormLabel>
                            <RadioGroup>
                                {lines.map((line, key) => {
                                    return (
                                        <FormControlLabel
                                            key={key}
                                            value={line._id}
                                            onChange={() => {setLineName(line.name), setTag(line._id)}}
                                            control={<Radio />}
                                            label={line.name}
                                        />
                                    );
                                })}
                                
                            </RadioGroup>
                        </FormControl>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={(e) => update(e)}
                        >
                            Update{" "}
                        </Button>
                    </form>
                </Modal>
            ) : updateImage ? (
                <Modal id="modal" open={isModalOpen} onClose={handleCloseModel}>
                    <form action="POST" id="formContent">
                        <h2>Update Product Image </h2>
                        <TextField
                className='form-input'
                id='multiple-images-input'
                type="file"
                name="multipleImgs"
                helperText='Upload Multiple Images'
                onChange={handleImageChange}
                multiple 
                inputProps={{ accept: 'image/*', multiple: true }}
                InputProps={{endAdornment: multipleImgs && ( 
                        <InputAdornment position="end">
                            <div>
                                {/* <img src={URL.createObjectURL(dogData.image)} alt="Uploaded Dog" /> */}
                                <HighlightOffIcon onClick={handleRemoveImages} style={{cursor: 'pointer'}}>Remove Image</HighlightOffIcon>
                            </div>
                        </InputAdornment> )
                        }} 
            />

                        <Button
                            variant="contained"
                            type="submit"
                            onClick={(e) => updateImg(e)}
                        >
                            Update Image{" "}
                        </Button>
                    </form>
                </Modal>
            ) : deleteProduct ? (
                <Modal id="modal" open={isModalOpen} onClose={handleCloseModel}>
                    <form id="formContent" action="POST">
                        <h2>Are you sure you want to delete this item?</h2>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={(e) => deleteProd(e)}
                        >
                            Delete Product{" "}
                        </Button>
                    </form>
                </Modal>
            ) : null}
            <div id="cards">
                {products.length > 0 ? (
                    products.map((product, key) => {
                        return (
                            <Card key={key} sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    component="img"
                                    style={{ height: 300, width: 300 }}
                                    image={product.multipleImgs[0]}
                                    alt={product.altText}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h7"
                                        component="div"
                                    >
                                        {`Name: ${product.productName}`}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h7"
                                        component="div"
                                    >
                                        {`Price: $${product.price}`}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h7"
                                        component="div"
                                    >
                                        {`Quantity: ${product.quantity}`}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h7"
                                        component="div"
                                    >
                                        {`altText: ${product.altText}`}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h7"
                                        component="div"
                                    >
                                        {`Tag: ${product.line}`}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            handleUpdateContent(product._id);
                                            handleOpenModel();
                                        }}
                                    >
                                        Update Content
                                    </Button>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            handleUpdateImage(product._id);
                                            handleOpenModel();
                                        }}
                                    >
                                        Update Image
                                    </Button>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            handleDeleteProduct(product._id);
                                            handleOpenModel();
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })
                ) : (
                    <h1>No products</h1>
                )}
            </div>
        </>
    );
}

export default ProductCardUpdate;
