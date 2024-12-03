import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './contact.scss';
import img from '../../Images/icon.png';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  const user = useSelector((state) => state.auth.user); 
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', { name: user.name, email: user.email, message });
  };

  return (
    <div className="contact-container">
      <div className="header-section">
        <div className="topic">GET IN TOUCH WITH US</div>
        <img 
          src={img}
          alt="Logo"
          className="logo"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            disabled
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            disabled
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea-field"
          />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      <div className="additional-info">
        <div className="info-section">
          <i className="icon"><BusinessIcon/></i> 
          <div>
            <strong>HEADQUARTERS</strong>
            <p>Level 02,<br />No 33 Main Street,<br />Kurunegala</p>
          </div>
        </div>
        <div className="info-section">
          <i className="icon"><LocalPhoneIcon/></i> 
          <div>
            <strong>CALL US ON</strong>
            <p>+94 (71) 852 6651</p>
          </div>
        </div>
        <div className="info-section">
          <i className="icon"><EmailIcon/></i> 
          <div>
            <strong>EMAIL US FOR</strong>
            <p>isharadasuni160@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
