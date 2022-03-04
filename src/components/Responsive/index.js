

import UpdatedComponent from "../commonModule"

import './index.css'
import ResponsiveItems from './ResponsiveItems'

const Responsive = (props)=> {
    const {errorData,dataLoad,projectCategorySearch}=props

    const myProjects = projectCategorySearch('RESPONSIVE')
    
    return(
    
        <div className="static_bgc_con col-12 text-center">
            {dataLoad ? 'Loading......' : errorData ? <h1>{errorData}</h1> : <>
            <h1 className="text-secondary">Static Projects</h1>
            <ul className="col-12 static_unordered_list">
                {myProjects.length >=1 ? myProjects.map(eachProject=>(
                   <ResponsiveItems key={eachProject._id} eachProject={eachProject} />
                   ))  : <h1>No Items Found</h1> }
               
            </ul>
            </>}
            
            
        </div>
    )
}

export default UpdatedComponent(Responsive)