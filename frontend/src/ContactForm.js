import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const school = document.getElementById('school').value;
        const phoneCC = document.getElementById('phone-cc').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST", 
            url:"http://localhost:5000/send", 
            data: {
                name: name,  
                school: school, 
                phoneCC: phoneCC,
                phone: phone,
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="container contact-container">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <h2>Arrange your free <br/> initial consultation now</h2>
                    <div className="first-input-group">
                        <div className="form-group contact-name">
                            <label for="name">Contact Person</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mid-first-space"></div>
                        <div className="form-group contact-school">
                            <label for="name">School</label>
                            <input type="text" className="form-control" id="school" />
                        </div>
                    </div>
                    <div className="second-input-group">
                        <div className="form-group contact-phone">
                            <label for="phone">Phone</label>
                            <div className="phone-number">
                                <input type="text" className="form-control" id="phone-cc" />
                                <div className="mid-phone-space"></div>
                                <input type="text" className="form-control" id="phone" />
                            </div>
                            
                        </div>
                        <div className="mid-first-space"></div>
                        <div className="form-group contact-email">
                            <label for="email1">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label for="message">Your message (optional)</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 