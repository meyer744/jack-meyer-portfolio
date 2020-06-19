import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReactProjects from './ReactProjectCards';
import WordPressProjects from './WordPressProjectCards';

const ProjectTabs = () => {
    return (
    <div id="Projects">
    <h2 className="projects-container-heading">Projects</h2>
    <div className="tabs-container">
        <Tabs className="tabs" defaultActiveKey="React-Projects" transition={false} id="noanim-tab-example">
            <Tab className="tab-content" eventKey="React-Projects" title="React Projects">
                <ReactProjects />
            </Tab>
            <Tab className="tab-content" eventKey="Wordpress" title="WordPress Sites">
                <WordPressProjects />
            </Tab>
        </Tabs>
    </div>
    </div>
    );
};

export default ProjectTabs;