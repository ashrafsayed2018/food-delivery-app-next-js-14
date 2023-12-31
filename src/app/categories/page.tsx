"use client"
import UserTabs from '@/components/layout/UserTabs'
import useProfile from '../customHook/useProfile'
import { preloadFont } from 'next/dist/server/app-render/entry-base'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type CategoryType = {
  name: string,
  _id?: string
}
type EditedCategoryType = {
  name: string,
  _id?: string
}
function Categories() {

  const [categoryName,setCategoryName] = useState("");
  const [categories,setCategories] = useState([])
  const [editedCategory,setEditedCategory] = useState<EditedCategoryType>({
    _id:"",
    name:"",
  });

  const {data:profileData,loading:profileLoading}= useProfile()
  

  useEffect(() => {

    fetchCategories();

  }, [])

  function fetchCategories()  {

    fetch("api/categories").then((response:Response) =>{
      response.json().then((categories) =>{
          setCategories(categories)
      });
    })
  }
  if(profileLoading) {
       return "loading admin information ..."
  }
  if(!profileData.isAdmin) {
    return "you are not allowed to access this category page"
  }

  const  handleCategorySubmit = async (event: FormEvent) => {

    event.preventDefault();

    const data:CategoryType = {name:categoryName};

    if(editedCategory._id !="" ) {
      data._id = editedCategory._id;
    }

    const creationPromise = new Promise(async(resolve, reject) => {

      const response = await fetch("/api/categories", {
        method: editedCategory._id !=""  ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })

       if(response.ok) {
         resolve("success")
         setCategoryName("")
         setEditedCategory({_id: "",name:""})
         fetchCategories()
       } else {
          reject()
       }

      await toast.promise(creationPromise,{
        loading: editedCategory._id !=""  ? "category updating" : "category creation",
        success:editedCategory._id !=""  ? "category updated successfully": "category created successfully",
        error: editedCategory._id !=""  ? "category updating failed" : "category creation failed"

      })
    });
 
  }

  return (
    <div className='max-w-lg mx-auto mt-8'>
        <UserTabs isAdmin={true}/>
        {/* form */}
        <form className='my-8' onSubmit={handleCategorySubmit}>
             <div className="flex gap-x-2 items-end m-0 p-0">
                 <div className='grow'>
                    <label htmlFor="name" className='block my-3 text-gray-500 text-sm'>

                      {editedCategory._id !="" ? `Update Category  : `: `Create Category`}
                      {editedCategory && 
                       <>
                         <strong>{editedCategory.name}</strong>
                       </>}
                    </label>
                    <input type="text" style={{margin:"0"}} value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                    
                 </div>
                 <div>
                     <input type="submit" value={editedCategory.name != "" ? `Update`: `Create`} className='bg-primary py-2 px-4 rounded-lg text-white cursor-pointer' />
                 </div>
             </div>
        </form>

        <div>
          <h2 className='mt-8 mb-3 text-gray-500 text-sm'>Edit category:</h2>
          {categories?.length > 0 && categories.map((category:CategoryType) => {
            console.log(category._id == editedCategory._id)
            return  <button 
             key={category._id} 
             className={`${category._id == editedCategory._id ? "bg-green-400" : "bg-gray-300"} text-gray-700 m-0 mb-2`}
             onClick={() => {
               setEditedCategory(category)
               setCategoryName(category.name)
             }}>{category.name}</button>
          }).reverse()}
        </div>
    </div>
  )
}

export default Categories