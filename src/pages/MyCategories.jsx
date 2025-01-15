
import React, { useEffect } from 'react'
import { Modal, Button, Form, FloatingLabel , Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { saveCategoryAPI } from '../services/allAPI';
import { getCategoryApI } from '../services/allAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { DeleteAllcategoryAPI} from '../services/allAPI';






const MyCategories = () => {
  const[categoryDetails,setcategoryDetails]=useState({
    categoryName:"",imgUrl:""
    

})
console.log(categoryDetails);

  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const AddCategory = async () => {
    const { categoryName, imgUrl } = categoryDetails;
    if (categoryName && imgUrl) {
      try {
        const result = await saveCategoryAPI(categoryDetails);
        if (result.status >= 200 && result.status < 300) {
          // Directly add the new category to the state without fetching all categories again
          setAllcategory(prevCategories => [...prevCategories, result.data]);
  
          // Close the modal
          handleClose();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fill the form');
    }
  };
  
  const[allcategory,setAllcategory]=useState([])
    useEffect(()=>{
      getAllcategory()

    },[])
    console.log(allcategory);

    
    const getAllcategory=async()=>{
        try{
            const result=await getCategoryApI()
            console.log(result);
            
            if(result.status>=200 && result.status<300){
                setAllcategory(result.data);
                
            }
        }catch(err){
            console.log(err);
            
        }
    }
    const removeBook = async (id) => {
      console.log("Deleting book with ID:", id); 
      try {
          const result = await DeleteAllcategoryAPI(id);
          if (result.status >= 200 && result.status < 300) {
              setAllcategory(allcategory.filter(book => book.id !== id));
          } else {
              console.log("Failed to delete:", result);
          }
      } catch (err) {
          console.log("Error during deletion:", err);
      }
  };
  return (
    <div className='content1'>
  <div className='d-flex justify-content-center align-items-center'>
    <h1>Categorize Your Book</h1>
    <button onClick={handleShow} style={{ background: '#a3e0ff' }} className='btn ms-3 rounded-circle fw-bolder fs-5'>+</button>
  </div>
  <div>
    {allcategory.length > 0 ? (
      <Row className="mt-4 g-4"> {/* 'g-4' adds gutter space between columns */}
      {allcategory.map((category, index) => (
        <Col key={index} className="p-2 col-auto"> {/* Adjust spacing here if needed */}
          <Card style={{ display: 'inline-block', height: '300px' }} className="border-white">
            <div className="d-flex justify-content-center">
              <Card.Img
                style={{ maxHeight: '250px', width: '200px', maxWidth: '100%' }}
                variant="top"
                src={category.imgUrl}
                alt={category.categoryName}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-center text-truncate">{category.categoryName}</Card.Title>
              <div className="d-flex justify-content-center align-items-center mt-auto">
                <button onClick={() => removeBook(category.id)} className="btn btn-outline-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
    ) : (
      <p>No categories added yet.</p>
    )}
  </div>

        <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title>ADD BOOK !!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <FloatingLabel className="mt-2" controlId="floatingUrl" label="Category Name">
      <Form.Control
        onChange={(e) => setcategoryDetails({ ...categoryDetails, categoryName: e.target.value })}
        type="text"
        placeholder="Category Name"
      />
    </FloatingLabel>
    <FloatingLabel className="mt-2" controlId="floatingUrl" label="Book Image Url">
      <Form.Control
        onChange={(e) => setcategoryDetails({ ...categoryDetails, imgUrl: e.target.value })}
        type="text"
        placeholder="Book Image URL"
      />
    </FloatingLabel>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel
    </Button>
    <Button onClick={AddCategory} variant="primary">
      Add
    </Button>
  </Modal.Footer>
</Modal>
        </div>
  )
}

export default MyCategories
