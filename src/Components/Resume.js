import React from 'react';

const Resume = () => {
return (
<div id="Resume">    
    <h2 className="resume-container-heading">Jack Meyer Resume</h2>
        <div className="resume-container">
                <div className="resume-left">
                <h3 className="resume-header">JOB EXPERIENCE</h3>
                    <div className="resume-section">
                <h3 className="resume-company-header">Emerson Climate Technologies</h3>
                <h3 className="resume-location-header">Sidney, Ohio - AV/ IT Analyst</h3>
                <p className="resume-dates">April 2017 - April 2019, Jan 2020 - PRESENT</p>
                    <ul className="resume-list">
                        <li className="resume-list-item">AV/ IT  support to end-users of all levels</li>
                        <li className="resume-list-item">Troubleshooting basic networking issues</li>
                        <li className="resume-list-item">SharePoint site development</li>
                        <li className="resume-list-item">Call center software admin</li>
                    </ul>
                    </div>
                    <div className="resume-section">
                <h3 className="resume-company-header">HVAC Direct</h3>
                <h3 className="resume-location-header">Troy, Ohio - SEM Specialist</h3>
                <p className="resume-dates">April 2019 - September 2019</p>
                    <ul className="resume-list">
                        <li className="resume-list-item">Management of pay per click accounts</li>
                        <li className="resume-list-item">Magento Web design/ development</li>
                        <li className="resume-list-item">Conversion Rate Optimization - A/B Testing</li>
                        <li className="resume-list-item">Installation of conversion tracking scripts</li>
                        <li className="resume-list-item">Automated Bidding Script Implementation</li>
                    </ul>
                    </div>
                    <div className="resume-section">
                <h3 className="resume-company-header">EM Launch</h3>
                <h3 className="resume-location-header">Minster, Ohio - Co-Founder</h3>
                <p className="resume-dates">January 2018 - PRESENT</p>
                    <ul className="resume-list">
                        <li className="resume-list-item">Wordpress website design/ development</li>
                        <li className="resume-list-item">CSS & HTML customizations</li>
                        <li className="resume-list-item">Digital marketing services</li>
                        <li className="resume-list-item">Google tag manager deployment</li>
                        <li className="resume-list-item">Google analytics site integration</li>
                    </ul>
                    </div>
                </div>
                    <div className="resume-right">
                    <h3 className="resume-header">RELEVANT SKILLS</h3>
                    <div className="resume-section">
                        <ul className="resume-list">
                            <li className="resume-list-item">CSS3 & HTML5</li>
                            <li className="resume-list-item">JavaScript</li>
                            <li className="resume-list-item">React.js</li>
                            <li className="resume-list-item">Command line/ Terminal</li>
                            <li className="resume-list-item">Graphic Design</li>
                            <li className="resume-list-item">Adobe Suite</li>
                            <li className="resume-list-item">SEO/ SEM</li>
                            <li className="resume-list-item">Google Analytics</li>
                            <li className="resume-list-item">Google Ads </li>
                            <li className="resume-list-item">Google Search Console</li>
                        </ul>
                    </div>
                    <h3 className="resume-header">EDUCATION AND COURSES</h3>
                    <div className="resume-section">
                <h3 className="resume-company-header">Edison Coummunity College</h3>
                <h3 className="resume-location-header">Associate Degree</h3>
                <h3 className="resume-location-header">Network Computer Management</h3>    
                <p className="resume-dates">GRADUATED: January 2017</p>
                    </div>
                    <div className="resume-section">
                <h3 className="resume-company-header">Ohio State University</h3>
                <h3 className="resume-location-header">Bachelor's Degree</h3>
                <h3 className="resume-location-header">Communications</h3>
                <p className="resume-dates">GRADUATED: June 2011</p>
                    </div>
                    <div className="resume-section">
                <h3 className="resume-company-header">Udemy</h3>
                <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8691788?start=225"><h3 className="resume-location-header">The Complete Web Developer in 2019</h3></a> 
                <p className="resume-dates">COMPLETED: May 2019</p>
                <a href="https://www.udemy.com/course/javascript-basics-for-beginners/"><h3 className="resume-location-header">JavaScript For Beginners</h3></a>   
                <p className="resume-dates">COMPLETED: April 2020</p>
                    </div>
                    </div>
        </div>
    </div>
        );
};

export default Resume;