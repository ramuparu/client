import './index.css'

const ProjectItems = (props)=>{
    const {eachProject}=props
    const {imageUrl,title,description}=eachProject

    return(
        <li className="list_style bg-transparent d-flex flex-row justify-content-between m-2">
            <img src={imageUrl} alt={`project ${title}`} className='w-50' />
            <div className='d-flex flex-column justify-content-between'>
                <p className='text-danger'>{title}</p>
                <p className='text-warning'>{description}</p>
            </div>
        </li>
    )
}

export default ProjectItems

