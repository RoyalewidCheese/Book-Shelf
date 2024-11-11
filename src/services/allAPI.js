//API call

import commonAPI from "./commonAPI"
import serverUrl from "./ServerURL"

// store uploadBook -post
export const saveBookImage=async(imageDetails)=>{
  return await commonAPI("POST",`${serverUrl}/uploadBooks`,imageDetails)

}
//get uploaded books
export const getAllBookAPI=async()=>{
    return await commonAPI("GET",`${serverUrl}/uploadBooks`,"")
  
  }
//delete Books
export const DeleteAllBookAPI=async(id)=>{
  return await commonAPI("DELETE",`${serverUrl}/uploadBooks/${id}`)

}
export const saveCategoryAPI=async(categoryDetails)=>{
  return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}
export const getCategoryApI=async()=>{
  return await commonAPI("GET",`${serverUrl}/categories`,"")

}
export const DeleteAllcategoryAPI=async(id)=>{
  return await commonAPI("DELETE",`${serverUrl}/categories/${id}`)

}
// services/allAPI.js

export const updateBookCategoryAPI = async (bookId, category) => {
  return await commonAPI("PUT", `${serverUrl}/uploadBooks/${bookId}`, { category });
};
// Update book's status (e.g., 'Currently Reading', 'Next Up', 'Finished')
export const updateBookStatusAPI = async (bookId, status) => {
  return await commonAPI("PUT", `${serverUrl}/uploadBooks/${bookId}`, { status });
};








