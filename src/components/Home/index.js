import {  useState } from "react"; 
import axios from 'axios'


import './index.css'





const Home  = ()=>{
  const [category,setCategory] = useState('')
  const [image,setImage] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription]=useState('')
  const [errorType,setError]=useState(true)
  
  
    

    const whenSubmitProjectDetails = (event)=>{
        event.preventDefault()
        
        const projectFullDetails = {
             category,imageUrl:image,title,description
        }

       axios.post('http://localhost:4000/createproj',projectFullDetails).then((arr)=>{
           setError(false)
           
       }).catch(()=> setError(true)) 
       setTitle('')
       setCategory('')
       setDescription('')
       setImage('')
       
      }

      
      
    return(
        
        
            <div className="col-12 project-form-container text-center">
              
            <h1>Project Details</h1>
            <div className='col-12 d-flex flex-row justify-content-center'>
            <form onSubmit={whenSubmitProjectDetails}>
  <div className="mb-3">
    <label htmlFor="category" className="form-label">Category</label>
    <input type="category" className="form-control" id="category" placeholder="Enter Category" value={category} onChange={(e)=>setCategory(e.target.value)} />

    
  </div>
  <div className="mb-3">
    <label htmlFor="imageurl" className="form-label">ImageUrl</label>
    <input type="text" className="form-control" id="imageurl" placeholder="Paste image Url" value={image} onChange={(e)=>  setImage(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" placeholder="Enter Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  

</form>

</div>
            </div>
            
           
    )
}

export default Home