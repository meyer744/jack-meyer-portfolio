import React from 'react';
import {ProjectList} from '../Data/ProjectsList';

const ReactProjects = () => {

let projects = ProjectList.map((project) => {

    if (project.category === "React")
 
    return (
            <div className="cards" >
            <img className="proj-pic" src={project.projPicUrl} />
            <h3 className="card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
            <h3 className="tech-list-heading">Technologies Used</h3>
                <div>
                <ul className="tech-list">
                    {project.technology.map((lis) => {return <li className="tech-list-item">#{lis}</li> })}
                </ul>
                </div>
                <div className="card-links">
                <p><a href="{project.url}">Live Preview</a></p>
                <p><a href="{project.url}">Git Repository</a></p>
                </div>
            </div>
        );
        
}  );
        return (
        <div className="card-container">
        {projects}
        </div>
    )
};

export default ReactProjects;