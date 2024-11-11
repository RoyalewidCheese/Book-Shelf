import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='content'>
        <div class="search-bar-container">
  <input type="text" class="search-input" placeholder="Search..."/>
</div>
 <h1  style={{marginTop:'30px'}}>Book of the Day</h1>
 
 <div className="container mt-5">
      <div className="card border-black" style={{ maxWidth: '540px', margin: '0 ',height:'330px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img style={{height:'103%'}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1WvLqUSEVh2HYw8QLFExx4AtMRWqLZsa7g&s"
              className="img-fluid rounded-start"
              alt="Book Cover"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">THE ALCHEMIST</h5>
              <h6 className="card-subtitle mb-2 text-muted">by Paulo Coelho </h6>
              <p className="card-text">
              The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt.
              </p>
            <Link to='/MyLibrary' style={{}}><button style={{padding:'10px 15px',borderRadius:'10px',background:'#DFD0C0',borderColor:'black'}} >Add to Library</button></Link>
            <Link to='https://ia801006.us.archive.org/13/items/OceanofPDF.comTheAlchemist/_OceanofPDF.com_The_Alchemist.pdf' style={{marginLeft:'20px'}}><button style={{padding:'10px 15px',borderRadius:'10px',background:'white',borderColor:'black'}} >Read</button></Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{marginLeft:'700px',marginTop:'-400px',}}>
    <h1 >Free Books <span>    <Link to='/MyLibrary' style={{fontSize:'20px',marginLeft:'150px',textDecoration:'none',color:'gray'}}>See All</Link>
    </span></h1>
     
    <img style={{height:'200px',}} src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRz0ny4RFBo1u0zPQTZcEkMLvtjK65ex14u_uJdB-d0E4YzH4pAtpwaBu_Z8Crpv-IzDBwFPdaBnz8TAXWb_asuQ00aUKUV1rtZ99ZHBMj_qZVgzCYgkwS8Tg" alt="" />
    <img style={{height:"200px",marginLeft:'10px' }} src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqJ3_8p7p0VAduJF88ab8EGx0ASJDY0avF3GKd-J_eDAfEq-uzHmc9Soz9m0HE5mXN-E-xdG4_0FQ5Zs6rd4690_seWetaIoOY9qZaaEo" alt="" />
    <img style={{height:"200px",marginLeft:'10px'}} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS49iP8nUOPKC-M3e_GPb7kTVIXQ1af_MZhyY_JRUAygpmp56ejRweoGx8RRJG_OHPCgFZRzpLNzEvasoHpvpXQy8K7B9Lx6er96CP9v3M" alt="" /> <br />
    <img style={{height:"200px",marginTop:'20px'}} src="https://99bookstores.com/cdn/shop/files/91bYsX41DVL._SL1500.jpg?v=1698414556&width=1920" alt="" />
    <img style={{height:'200px',marginLeft:'35px',marginTop:'20px'}} src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7oMpC0aa6N2WZOt8saEaTfh_aoZV1XQnkNZ_Dy--ZZVUGIzw3doLKLeX4pELaOuY_SRQREi07JZmZ7ka3-4K7_PYlApjTiqpvVsS_ZmWvQ-2DTUZkVJUJmw" alt="" />
    <img style={{height:'200px',marginLeft:'310px',marginTop:'-225px'}} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSk6VZuy07w6PZZ4vGQNWG-MoEGuwxuE3TD_9MEqcRLIyfMpheoD0KokR-JUF2me24aW32_6EJZsNi0RN2fYgqz2k75ELVUp1IAuO2VNVF" alt="" />


    </div>

  







    </div>
  )
}

export default Home