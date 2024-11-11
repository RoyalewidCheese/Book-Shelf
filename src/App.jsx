import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyCategories from './pages/MyCategories'
import MyLibrary from './pages/MyLibrary'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';





import './App.css'
import { useState } from 'react'



function App() {
  const [favouriteBooks,setFavouriteBooks]=useState([])
const addToFavourites=(book)=>{
  if(!favouriteBooks.find((favBook)=>favBook.id===book.id)){
    setFavouriteBooks([...favouriteBooks,book])
  }
}

  return (
    <>
    <Header/>
    <Routes>

      <Route path='/'element={<Home/>}></Route>
      <Route path='/MyCategories'element={<MyCategories/>}></Route>
      <Route path='/MyLibrary'element={<MyLibrary addToFavourites={addToFavourites}/>}></Route>

    </Routes>
   
    </>
  )
}

export default App
