import { useState } from "react";
import { Modal,Button,Form } from "react-bootstrap";
import Rating from '@mui/material/Rating';
const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [titleAZIZ,setTitleAZIZ] = useState('')
    const [description,setDescription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)
    const handleAdd=()=>{
        setMovies([...movies,{title : titleAZIZ,description,posterURL,rating,id : Math.random()}])
    }
    return(
        <>
        <div className="add">
        <Button style={{marginRight : "3%"}}  variant="outline-success" onClick={handleShow}>
          +
        </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setTitleAZIZ(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="Enter Photo" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
       onChange={(e)=>setRating(e.target.value)}
      />
      </Form.Group>



    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleAdd();handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddMovie