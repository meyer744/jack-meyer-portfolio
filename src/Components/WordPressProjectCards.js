import React from 'react';
import {ProjectList} from '../Data/ProjectsList';

const WordPressProjects = () => {

let projects = ProjectList.map((project) => {

    if (project.category === "WordPress")
 
    return (
            <div className="cards" >
            <img className="proj-pic" src={project.projPicUrl} />
            <h3 className="card-title">{project.title}</h3>
                {/* <p className="project-description">{project.description}</p> */}
            <h3 className="tech-list-heading">Technologies Used</h3>
                <div>
                <ul className="tech-list">
                    {project.technology.map((lis) => {return <li className="tech-list-item">#{lis}</li> })}
                </ul>
                </div>
                <div className="card-links">
                <p><a href={project.siteUrl}>Live Preview</a></p>
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
    

export default WordPressProjects;