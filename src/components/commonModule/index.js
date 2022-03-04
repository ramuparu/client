
import { useContext } from "react"
import { ProjectContext } from "../../App"

const UpdatedComponent = (WrappedComponent)=>{
      const ProjectComponent = ()=>{
        const projectContext = useContext(ProjectContext)
        const {errorData,dataLoad,projectData}=projectContext
        const {projects}=projectData

        

        const projectCategorySearch = (projectType)=>{
            const filteredProjects = projects.filter(eachCategory=>eachCategory.category.toUpperCase() ===projectType)
            return filteredProjects
            
        }

        
          return(
              <WrappedComponent projects={projects} errorData={errorData} dataLoad={dataLoad} projectCategorySearch={projectCategorySearch} />
          )
      }
      return ProjectComponent
}

export default UpdatedComponent