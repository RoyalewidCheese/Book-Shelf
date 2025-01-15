import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHoveredRead, setIsHoveredRead] = useState(false);
  const [isHoveredRead1, setIsHoveredRead1] = useState(false);
  const [isHoveredRead2, setIsHoveredRead2] = useState(false);
  return (
    <div className="content">
      <div className="book-of-the-day">
        <h1 style={{ marginTop: '30px' }}>Books of the Day</h1>

        <div className="container mt-5">
          <div className="card border-white" style={{ maxWidth: '540px', height: '330px' }}>
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img
                  style={{ height: '250px', width: '150px', margin: 'auto 15px' }}
                  src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg"
                  className="img-fluid rounded-start"
                  alt="Book Cover"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Ikigai: The Japanese Secret to a Long and Happy Life</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Book by Francesc Miralles and Hector Garcia
                  </h6>
                  <p className="card-text">
                    The book reveals how discovering your ikigai—a balance of passion, vocation, mission, and profession—leads to a fulfilling life.
                    Inspired by Okinawa's centenarians, it emphasizes purpose, mindfulness, and community for happiness and longevity.
                  </p>
                  <Link to="/MyLibrary">
                    <button
                      style={{
                        padding: '10px 15px',
                        borderRadius: '10px',
                        background: isHovered ? '#82cfff' : 'white',
                        borderColor: 'black',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Add to Library
                    </button>
                  </Link>
                  <Link
                    to="https://dn790007.ca.archive.org/0/items/ikigai-the-japanese-secret-to-a-long-and-happy-life-pdfdrive.com/Ikigai%20_%20the%20Japanese%20secret%20to%20a%20long%20and%20happy%20life%20%28%20PDFDrive.com%20%29.pdf" target='_blank'
                    style={{ marginLeft: '20px' }}
                  >
                    <button
                      style={{
                        padding: '10px 15px',
                        borderRadius: '10px',
                        background: isHoveredRead ? '#f0e68c' : 'white', // Change color on hover
                        borderColor: 'black',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setIsHoveredRead(true)}
                      onMouseLeave={() => setIsHoveredRead(false)}
                    >
                      Read
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-white" style={{ maxWidth: '540px', height: '330px' }}>
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img
                  style={{ height: '250px', width: '150px', margin: 'auto 15px' }}
                  src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/18The-Invisible-Man-Book-Cover-385x600-1.jpg"
                  className="img-fluid rounded-start"
                  alt="Book Cover"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Invisible Man</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Book By Ralph Ellison
                  </h6>
                  <p className="card-text">
                    The book cover, designed by Edward McKnight Kauffer in 1952, features a man in shadows, symbolizing the main character, Griffin, who learns to make himself invisible. The design reflects the theme of the book.
                  </p>
                  <Link to="/MyLibrary">
                    <button
                      style={{
                        padding: '10px 15px',
                        borderRadius: '10px',
                        background: isHovered1 ? '#82cfff' : 'white',
                        borderColor: 'black',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setIsHovered1(true)}
                      onMouseLeave={() => setIsHovered1(false)}
                    >
                      Add to Library
                    </button>
                  </Link>
                  <Link
                    to="https://modernforms.org/wp-content/uploads/Ralph-Ellison-Invisible-Man-Text.pdf" target='_blank'
                    style={{ marginLeft: '20px' }}
                  >
                    <button
                      style={{
                        padding: '10px 15px',
                        borderRadius: '10px',
                        background: isHoveredRead1 ? '#f0e68c' : 'white', // Change color on hover
                        borderColor: 'black',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setIsHoveredRead1(true)}
                      onMouseLeave={() => setIsHoveredRead1(false)}
                    >
                      Read
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-white" style={{ maxWidth: '540px', height: '330px' }}>
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img
                  style={{ height: '250px', width: '150px', margin: 'auto 15px' }}
                  src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/28intuition.jpg"
                  className="img-fluid rounded-start"
                  alt="Book Cover"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Intuition: Access your inner wisdom. Trust your instincts. Find your path.</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Book By Amisha Ghadiali
                  </h6>
                  <p className="card-text">
                    The book cover, illustrated by Eiko Ojala, uses shades of blue to depict a woman's silhouette, symbolizing the theme of tuning inner self for mental, emotional, and spiritual growth. It's a thoughtfully designed and impactful cover.
                  </p>
                  <Link to="/MyLibrary">
                    <button
                      style={{
                        padding: '10px 15px',
                        borderRadius: '10px',
                        background: isHovered2 ? '#82cfff' : 'white',
                        borderColor: 'black',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setIsHovered2(true)}
                      onMouseLeave={() => setIsHovered2(false)}
                    >
                      Add to Library
                    </button>
                  </Link>
                  <Link
                    to="https://www.ebooks.com/en-us/book/210169351/intuition/amisha-ghadiali/" target='_blank'
                    style={{ marginLeft: '20px' }}
                  >
                    <button
                      style={{
                        padding: '10px 15px',
                        borderRadius: '10px',
                        background: isHoveredRead2 ? '#f0e68c' : 'white', // Change color on hover
                        borderColor: 'black',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setIsHoveredRead2(true)}
                      onMouseLeave={() => setIsHoveredRead2(false)}
                    >
                      Read
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="free-books-container">
        <h1 className="text-center">
          Free Books
          <span>
            <Link
              to="/MyLibrary"
              style={{
                fontSize: '20px',
                textDecoration: 'none',
                color: '#007BFF', // Initial color
                marginLeft: '10px', // Space between text and link
                marginTop: '10px', // Gap between "Free Books" and link
                cursor: 'pointer', // Pointer cursor on hover
                fontWeight: 'bold', // Bold for emphasis
                transition: 'color 0.3s', // Smooth transition for color change
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#0056b3'; // Darker color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#007BFF'; // Reset color
              }}
            >
              See All
            </Link>
          </span>
        </h1>


        <div className="book-images">
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/7F451.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/16nightshift.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/07/GodofWoods.jpg?w=994&quality=89&ssl=1"
            alt=""
          />
          <img
            className="book-image"
            src="https://m.media-amazon.com/images/I/91CqNElQaKL._AC_UF1000,1000_QL80_.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/07/Dismantling.jpg?w=978&quality=89&ssl=1"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/19teaspoonofearthandsea.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/33Jurassic-Park-Book-Cover-458x600-1.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/41ghostforest.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/45Morethanthis.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/48smallfortune.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/7F451.jpg"
            alt=""
          />

          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/25masterandmargarita.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/31handmaidstale.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/36getintrouble.jpg"
            alt=""
          />
          <img
            className="book-image"
            src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/42winningminds.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

  );
};

export default Home;
