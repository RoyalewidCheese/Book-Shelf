
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, FloatingLabel, Card, Row, Col } from 'react-bootstrap';
import { saveBookImage, getAllBookAPI, DeleteAllBookAPI, updateBookStatusAPI } from '../services/allAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const MyLibrary = ({}) => {
    const [favouriteBooks, setFavouriteBooks] = useState([]);
    const [imageDetails, setImageDetails] = useState({ caption: "", imgUrl: "", link: "" });
    const [allimages, setAllimages] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllimages();
    }, []);

    const getAllimages = async () => {
        try {
            const result = await getAllBookAPI();
            if (result.status >= 200 && result.status < 300) {
                setAllimages(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const AddBook = async () => {
        const { caption, imgUrl, link } = imageDetails;
        if (caption && imgUrl && link) {
            try {
                const result = await saveBookImage(imageDetails);
                if (result.status >= 200 && result.status < 300) {
                    setAllimages([...allimages, result.data]);
                    handleClose();
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            alert('Please fill the form');
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeBook = async (id) => {
        try {
            const result = await DeleteAllBookAPI(id);
            if (result.status >= 200 && result.status < 300) {
                setAllimages(allimages.filter(book => book.id !== id));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleHeartClick = (book) => {
        // Add book to favourites
        setFavouriteBooks(prevBooks => [...prevBooks, book]);
    };

    const handleDeleteFromFavs = (id) => {
        // Remove book from favourites
        setFavouriteBooks(favouriteBooks.filter(book => book.id !== id));
    };

    // Update book status (e.g., 'Currently Reading', 'Next Up', 'Finished')
    const handleStatusChange = async (bookId, status) => {
        try {
            const result = await updateBookStatusAPI(bookId, status);
            if (result.status >= 200 && result.status < 300) {
                setAllimages(allimages.map(book =>
                    book.id === bookId ? { ...book, status } : book
                ));
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="content1">
    <div className="d-flex align-items-center">
        <h1>Books</h1>
        <button onClick={handleShow} style={{ background: '#a3e0ff' }} className="btn ms-3 rounded-circle fw-bolder fs-5">+</button>
    </div>

    {/* Display all books */}
    <div>
        {allimages.length > 0 ? (
            <Row className="mt-4 g-0">  {/* 'g-0' removes gutter space between columns */}
                {allimages.map((image, index) => (
                    <Col key={index} className="p-0 col-auto">
    <Card style={{ display: 'inline-block', height: '300px' }} className='border-white'>
                            {image.link ? (
                                <a href={image.link} target="_blank" rel="noopener noreferrer">
                                    <div className="d-flex justify-content-center">
                                        <Card.Img 
                                            style={{ maxHeight: '250px', width: '200px', maxWidth: '100%' }} 
                                            variant="top" 
                                            src={image.imgUrl} 
                                            alt={image.caption} 
                                        />
                                    </div>
                                </a>
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <Card.Img 
                                        style={{ maxHeight: '200px', width: '200px', maxWidth: '100%' }} 
                                        variant="top" 
                                        src={image.imgUrl} 
                                        alt={image.caption} 
                                    />
                                </div>
                            )}
                            <Card.Body>
                                <Card.Title>{image.caption}</Card.Title>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <button onClick={() => removeBook(image.id)} className="btn btn-outline-danger">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button onClick={() => handleHeartClick(image)} style={{ color: 'red' }} className="btn">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>

                                {/* Dropdown for changing the status */}
                                <Form.Select
    style={{ marginTop: '20px', marginBottom: '10px' }} // Manual top and bottom margins
    value={image.status || "Not Started"}
    onChange={(e) => handleStatusChange(image.id, e.target.value)}
>
    <option value="Currently Reading">Currently Reading</option>
    <option value="Next Up">Next Up</option>
    <option value="Finished">Finished</option>
    <option value="Not Started">Not Started</option>
</Form.Select>


                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        ) : (
            <p>No books added yet.</p>
        )}
    </div>

    {/* Display favourite books */}
    <div>
    <h1 style={{ marginTop: '20px', marginBottom: '10px' }}>Favourite Books</h1>
    {favouriteBooks.length > 0 ? (
        <Row className="mt-4 g-3"> {/* 'g-3' adds a consistent gutter space between columns */}
        {favouriteBooks.map((book, index) => (
          <Col key={index} className="p-2 col-auto"> {/* Use 'p-2' to add padding around each card */}
            <Card style={{ height: '300px', width: '200px' }} className="border-white mx-auto">
              <div className="d-flex justify-content-center">
                <Card.Img
                  style={{
                    maxHeight: '250px',
                    width: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  variant="top"
                  src={book.imgUrl}
                  alt={book.caption}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center text-truncate">{book.caption}</Card.Title>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => handleDeleteFromFavs(book.id)}
                    className="btn btn-outline-danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    ) : (
        <p>No favourite books added yet.</p>
    )}
</div>


    {/* Modal for adding a book */}
    <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>ADD BOOK !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel className="mt-2" controlId="floatingName" label="Book-Name">
                <Form.Control onChange={e => setImageDetails({ ...imageDetails, caption: e.target.value })} type="text" placeholder="Book Name" />
            </FloatingLabel>
            <FloatingLabel className="mt-2" controlId="floatingUrl" label="Book-Image Url">
                <Form.Control onChange={e => setImageDetails({ ...imageDetails, imgUrl: e.target.value })} type="text" placeholder="Book-Image URL" />
            </FloatingLabel>
            <FloatingLabel className="mt-2" controlId="floatingLink" label="Book Read URL">
                <Form.Control onChange={e => setImageDetails({ ...imageDetails, link: e.target.value })} type="text" placeholder="Book Read URL" />
            </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" onClick={AddBook}>Add</Button>
        </Modal.Footer>
    </Modal>
</div>

    );
};

export default MyLibrary;



