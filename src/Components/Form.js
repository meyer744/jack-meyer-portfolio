import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


class Contact extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(
        <div id="Contact" className="contact-container-outer-div">
        <h2 className="contact-container-heading">Contact</h2>
        <div className="contact-container">
  	<div className="contact-form">
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	<div className="form-group">
      	<label className="label" htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label className="label" htmlFor="exampleInputEmail1">Email address</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label className="label" htmlFor="message">Message</label>
      	<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	</div>
  	<button type="submit" className="btn btn-primary">Submit</button>
  	</form>
  	</div>
    <div className="contact-info">
    <h2>Find Me Here:</h2>
        <ul>
            <li><a href="meyer.744@gmail.com">meyer.744@gmail.com</a></li>
            <li>Troy, Ohio</li>
        </ul>
        <ul className="social-list">
            <li><a href="https://www.facebook.com/meyer744/"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a></li>
            <li><a href="https://www.linkedin.com/in/jack-v-meyer/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/meyer744"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a></li>
        </ul>
    </div>
    </div>
    </div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}


export default Contact;